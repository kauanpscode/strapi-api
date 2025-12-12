module.exports = [
  'strapi::errors',
  {
    name: 'strapi::body',
    config: {
      formLimit: '2gb',
      jsonLimit: '2gb',
      textLimit: '2gb',
      formidable: {
        maxFileSize: 2 * 1024 * 1024 * 1024, // 2GB
      },
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
