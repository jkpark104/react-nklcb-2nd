// server
import liveServer from 'live-server';
// const liveServer = require('live-server');

const { PORT, OPEN } = process.env;

// web address
const params = {
  host: 'localhost',
  port: PORT || 3000,
  open: false,
};

liveServer.start(params);
