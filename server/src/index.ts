import { Board } from 'johnny-five';
import express from 'express';
import Sevsegs from './Sevsegs';
import cors from 'cors';

const board = new Board();

let sevsegs: Sevsegs;

board.on('ready', () => {
  sevsegs = new Sevsegs([3, 4, 5, 6, 7, 8, 9]);
});

const app = express();

app.use(cors());

app.get('/set', (req, res) => {
  const { n } = req.query;

  if(typeof n != 'string') {
    res.status(400);
    res.json({
      message: 'Il parametro n deve essere una stringa.'
    });
  }else {
    const parsedn = parseInt(n);
    try {
      sevsegs.print(parsedn);
      res.json({
        message: `Numero ${parsedn} mostrato.`
      });
    }catch(e: any) {
      res.status(400);
      res.json({
        message: e.message
      });
    }
  }
});

app.get('/clear', (req, res) => {
  sevsegs.clear();
  res.json({
    message: 'Schermo pulito.'
  });
});

app.get('/countdown', async (req, res) => {
  await sevsegs.countdown();
  res.json({
    message: 'Countdown terminato.'
  });
});

app.get('/countup', async (req, res) => {
  await sevsegs.countup();
  res.json({
    message: 'Countup terminato.'
  });
});

app.listen(8080, () => {
  console.log('Server listening at http://localhost:8080');
});
