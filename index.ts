import express from 'express';
import path from 'node:path';
import { serveStaticOptions } from './config/express/serve-static';
import { routes } from './config/express/routes';
const port = process.env.port || 3000;
const app = express();

console.log('starting music quiz server...');
app.use(routes);
app.use(express.static(path.join(__dirname, 'public'), serveStaticOptions));

app.listen(port, () => {
  console.log(`Listening on port on http://localhost:${port}`);
});