import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({
  title: 'API Boilerplate 🚧',
  technologies: ['TypeScript', 'Node', 'Express'],
  version: '1.0.0',
  author: {
    name: 'Gabriela Carvalho Camilo',
    gitHub: 'http://github.com/gabcamilo',
    linkedIn: 'https://www.linkedin.com/in/gabccamilo/',
  },
  licence: 'MIT',
}));

export default routes;
