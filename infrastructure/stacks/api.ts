import { CfnOutput, Stack } from 'aws-cdk-lib'
import { HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2';

import { Construct } from 'constructs'
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime } from 'aws-cdk-lib/aws-lambda'

export class ApiStack extends Stack {
  constructor(scope: Construct) {
    super(scope)

    const httpGateway = new HttpApi(this, `graphqlApi`, { apiName: 'graphqlApiName' })

    new CfnOutput(this, 'GatewayApiId', { value: httpGateway.httpApiId });
    new CfnOutput(this, 'GatewayApiUrl', { value: httpGateway.url as string });

    const graphqlLambda = new NodejsFunction(this, `graphqlLambda`, {
        entry: './src/graphql.ts',
        handler: 'default',
        runtime: Runtime.NODEJS_20_X,
        bundling: {
            loader: { ".node": "file" },
        }
      })
      
    const lambdaIntegration = new HttpLambdaIntegration(
        'graphqlLambda',
        graphqlLambda,
      );

    httpGateway.addRoutes({
        path: '/',
        methods: [HttpMethod.ANY],
        integration: lambdaIntegration,
      });
  }
}