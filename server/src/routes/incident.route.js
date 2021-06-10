import express from 'express';
import * as incidentController from '../controllers/incident.controller';
// import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to get all users
router.get('', incidentController.getAllIncidents);

//route to create a new user
router.post('', incidentController.newIncident);

//route to get a single user by their user id
router.get('/:id');

//route to update a single user by their user id
router.put('/:id', incidentController.updateIncident);

//route to delete a single user by their user id
router.delete('/:id', incidentController.deleteIncident);

export default router;
