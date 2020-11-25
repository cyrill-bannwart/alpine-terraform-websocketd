import express from 'express';

const apiMockRouter = express.Router();

apiMockRouter.get('/about', (req, res) => {
  const markdown = '### About Page Content\nThis site is _mocked._';
  res.send({ markdown });
});

apiMockRouter.get('/readme', (req, res) => {
  const markdown = '### Readme Page Content\nThis site is _mocked._';
  res.send({ markdown });
});

export default apiMockRouter;
