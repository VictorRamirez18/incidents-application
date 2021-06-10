import HttpStatus from 'http-status-codes';
import * as IncidentService from '../services/incident.service';

export const getAllIncidents = async (req, res, next) => {
  try {
    const data = await IncidentService.getAllIncidents();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const data = await IncidentService.getUser(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const newIncident = async (req, res, next) => {
  try {
    const data = await IncidentService.newIncident(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Incident created successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const updateIncident = async (req, res, next) => {
  try {
    const data = await IncidentService.updateIncident(req.params.id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Incident updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deleteIncident = async (req, res, next) => {
  try {
    await IncidentService.deleteIncident(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: req.body,
      message: 'Incident deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
