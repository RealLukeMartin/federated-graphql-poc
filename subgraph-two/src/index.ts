import { config } from './config';
import { standardLogger } from './services/logging';
import { startServer } from './startServer';

const PORT = config.server.port;

startServer()
  .then((app) => {
    app.listen(PORT, () => {
      standardLogger(
        'INFO',
        `Server started successfully on http://localhost:${PORT}/graphql`,
      );
    });
  })
  .catch((error) => console.error(error));
