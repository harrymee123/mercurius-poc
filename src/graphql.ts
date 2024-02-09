import { app } from "../build/app";
import { awsLambdaFastify } from "@fastify/aws-lambda";

const proxy = awsLambdaFastify(app);

export const handler = (event: any, context: any) => {
  console.log(event);
  console.log(context);
  return proxy;
};
