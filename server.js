const express = require('express'); // importing a CommonJS module
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('./data/dbConfig.js')

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

function teamNamer(req, res, next) {
  req.team = 'Web 16'
  next();
}

// global middleware pipeline/chain
server.use(express.json());
server.use(helmet());
server.use(morgan());
server.use(teamNamer);

server.use('/api/hubs', hubsRouter);


// server.get('/', async (req, res, next) => {
//   if(req.headers.name === 'po') {
//   res.send(`
//     <h2>Lambda Hubs API</h2>
//     <p>Welcome ${req.team} to the Lambda Hubs API</p>
//   `);
//   } else {
//     next('any argument will trigger the next error handling middleware')
//   }
// });

server.get('/', async (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.team} to the Lambda Hubs API</p>
  `)
});

// server.use(errorHandler)


// implementation

// function errorHandler(err, req, res, next) {
//   res.status(400).json({ message: "bad trash panda" })
// }

// authorization is a foobar banana property
function restricted(req, res, next) {
  const password = req.headers.authorization

  if (password === 'mellow') {
    next();
  } else {
    res.status(401)
  }
}

function moodyGateKeeper(req, res, next) {
  const seconds = new Date().getSeconds();

  if (seconds % 3 === 0) {
    res.status(403).json({ you: 'shall not pass!'})
  } else {
    next();
  }
}

server.use('/api/hubs', hubsRouter);
// server.use(moodyGateKeeper)

// export default server; ES2015 Modules
module.exports = server;
