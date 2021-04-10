'use strict';
import express from 'express';
const router = express.Router();
import connectionsController from '../controllers/connectionsController.js';

router.route('/:id')
    .get(connectionsController.connections_get);
    
export default router;