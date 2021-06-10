import express from 'express';
const router = express.Router();

import incidentRoute from './incident.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/incidents', incidentRoute);

  return router;
};

export default routes;
