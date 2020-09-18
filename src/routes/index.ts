import { Router } from 'express';

import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.get('/', (req, res) =>
  res.json({
    title: 'API Boilerplate 🚧',
    technologies: ['TypeScript', 'Node', 'Express', 'TypeOrm', 'PostgreSQL'],
    version: '1.0.0',
    author: {
      name: 'Gabriela Carvalho Camilo',
      gitHub: 'http://github.com/gabcamilo',
      linkedIn: 'https://www.linkedin.com/in/gabccamilo/',
    },
    licence: 'MIT',
  }),
);

export default routes;
