import AWS from "aws-sdk";

// Inicializar o provedor de credenciais do Amazon Cognito
AWS.config.region = process.env.AWS_REGION; // Região
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.AWS_INDENTITY_POOL,
});

export const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: process.env.AWS_BUCKET },
});
