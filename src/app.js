import express from 'express';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { router as homeRouter } from './home.js';


dotenv.config();

const {
  PORT: port = 3000,
} = process.env;

const app = express();

const path = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(path, '../public')));
app.set('views', join(path, '../views'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);

// eslint-disable-next-line no-unused-vars
function notFoundHandler(req, res, next) {
  res.status(404);
  return res.send('404 villa! - Síða fannst ekki');
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  return res.status(500).send('500 villa!');
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Server @ http://localhost:${port}/`,
  );
});
