const Hapi = require('@hapi/hapi');
const routes = require('./routes');

/* launch server on chrome using chrome.exe  --disable-site-isolation-trials
--disable-web-security --user-data-dir="PATH_TO_PROJECT_DIRECTORY" */

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
