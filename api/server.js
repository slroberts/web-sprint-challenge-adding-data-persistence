const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const ProjectsRouter = require('../projects/projects-router.js');
const ResourcesRouter = require('../resources/resources-router.js');
const TasksRouter = require('../tasks/tasks-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger);

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'up',
  });
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'host'
    )}`
  );

  next();
}

module.exports = server;
