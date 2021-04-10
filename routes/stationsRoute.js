'use strict';
import express from 'express';
const router = express.Router();
import stationsController from '../controllers/stationsController.js';

router.route('/')
    .post(stationsController.station_post)
    .get(stationsController.station_list_get);

router.route('/:id')
    .get(stationsController.station_get)
    .patch(stationsController.station_put)
    .delete(stationsController.station_delete);

export default router;