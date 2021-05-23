const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { controllers } = require('./route');
const { authentication, authorization } = require('./service/AuthService');
const { errorHandler } = require('./middleware/errorHandler');
const { initBDConnection } = require('./repository/Db');

initBDConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const registerHandlers = () => {
  controllers.forEach(
    (controller) => {
      if (controller.secured) {
        app[controller.method](
          controller.route, authentication, authorization, controller.handler,
        );
      } else {
        app[controller.method](
          controller.route, controller.handler,
        );
      }
      app[controller.method](
        controller.route, controller.handler,
      );
    },
  );
};

registerHandlers();
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`User server listening at http://localhost:${process.env.PORT}`);
});
