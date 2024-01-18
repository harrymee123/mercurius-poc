import { app } from '../build/app'
import { awsLambdaFastify } from "@fastify/aws-lambda"

const handler = awsLambdaFastify(app)

export default handler