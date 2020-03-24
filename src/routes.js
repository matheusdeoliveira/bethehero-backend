const express = require('express');
const ongController = require('./controllers/ong_controller');
const incidentController = require('./controllers/incident_controller');
const profileController = require('./controllers/profile_controller');
const sessionController = require('./controllers/session_controller');


const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs',ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents',incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;