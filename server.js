import Express from 'express';
import ServeStatic from 'serve-static';
import path from 'path';

const app = Express();

app.use(ServeStatic('./dist'));
app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, './dist/index.html')); });

app.listen(3500, (server) => { console.log('server listening on 3500'); });
