import sequelize, { DataTypes } from '../config/database';
const Incident = require('../models/incident')(sequelize, DataTypes);

//get all users
export const getAllIncidents = async () => {
  const data = await Incident.findAll();
  return data;
};

//create new Incident
export const newIncident = async (body) => {
  const data = await Incident.create(body);
  return data;
};

//update single Incident
export const updateIncident = async (id, body) => {
  await Incident.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single Incident
export const deleteIncident = async (id) => {
  await Incident.destroy({ where: { id: id } });
  return false;
};

//get single Incident
export const getIncident = async (id) => {
  const data = await Incident.findByPk(id);
  return data;
};
