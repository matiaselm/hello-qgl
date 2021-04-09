'use strict';
import express from 'express';
const router = express.Router();
import stationsController from '../controllers/stationsController.js';

router.route('/')
    .post(stationsController.station_post)
    .get(stationsController.station_list_get)
    .delete(stationsController.station_delete);

router.route('/limit/:limit')
    .get(stationsController.station_list_get);

router.route('/:id')
    .get(stationsController.station_get)
    .patch(stationsController.station_put)

export default router;