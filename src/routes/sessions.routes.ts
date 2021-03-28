import { Router } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  return res.send();
});

export default sessionsRouter;
