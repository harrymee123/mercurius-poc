import { APIGatewayRequestAuthorizerEvent } from "aws-lambda";

export const handler = async (event: APIGatewayRequestAuthorizerEvent, context: any) => {
  if (event.headers && event.headers.authorization === "harry") {
    return {
      isAuthorized: true,
      context: {
        isGuest: false,
      },
    };
  }

  return {
    isAuthorized: true,
    context: {
      isGuest: true,
    },
  };
};
