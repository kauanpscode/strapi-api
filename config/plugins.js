module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        region: 'us-east-1',
        endpoint: env('R2_ENDPOINT'),
        signatureVersion: 'v4',
        forcePathStyle: true,
        cloudflarePublicAccessUrl: env('R2_PUBLIC_URL'), // Para o plugin
        baseUrl: env('R2_PUBLIC_URL'),                   // Para o Strapi
        params: {
          Bucket: env('R2_BUCKET'),
        },
      },
    },
  },
});