import { CfnOutput, Duration, Stack } from "aws-cdk-lib";
import { HttpApi, HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaAuthorizer, HttpLambdaResponseType } from "aws-cdk-lib/aws-apigatewayv2-authorizers";

import { Construct } from "constructs";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";

export class ApiStack extends Stack {
  constructor(scope: Construct) {
    super(scope, "mercurius-graphql-api");

    const httpGateway = new HttpApi(this, `graphqlApi`, { apiName: "graphqlApiName" });

    const authLambda = new NodejsFunction(this, "authLambda", {
      entry: "./src/userAuthorizer.ts",
      runtime: Runtime.NODEJS_20_X,
    });

    const authorizer = new HttpLambdaAuthorizer("httpLambdaAuthorizer", authLambda, {
      responseTypes: [HttpLambdaResponseType.SIMPLE],
      resultsCacheTtl: Duration.seconds(0),
      identitySource: [""],
    });

    const graphqlLambda = new NodejsFunction(this, `graphqlLambda`, {
      entry: "./src/graphql.ts",
      runtime: Runtime.NODEJS_20_X,
    });

    new CfnOutput(this, "GatewayApiId", { value: httpGateway.httpApiId });
    new CfnOutput(this, "GatewayApiUrl", { value: httpGateway.url as string });

    httpGateway.addRoutes({
      path: "/",
      methods: [HttpMethod.ANY],
      integration: new HttpLambdaIntegration("graphqlLambda", graphqlLambda),
      authorizer,
    });
  }
}
