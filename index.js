import express from 'express';
import run from './run.js';
import cors from 'cors';
import multer from 'multer';
import { snapshots } from '../visualuralgo/src/data_structures/snapshot/snapshot.js';
import { tracers } from '../visualuralgo/src/data_structures/tracer/tracer.js';
import http from 'http';

const app = express();
const port = 3001;
const upload = multer();

app.use(cors());
app.use('/', express.static('build'));

app.post('/vm', upload.single('code.js'), (req, res) => {
  const code = req.file.buffer.toString();
  run(code);
  res.send(snapshots);
  snapshots.splice(0, snapshots.length);
  tracers.splice(0, tracers.length);
});

app.listen(port);

http.createServer(app).listen(80);
