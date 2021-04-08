'use strict';
import connections from '../models/Connections.js';

const connections_get = async (req, res) => {
    try {
        res.send(await connections.findById(req.params.id).populate('ConnectionTypeID', 'LevelID', 'CurrentTypeID'));
    } catch (e) {
        res.send('Cant find connection with id ' + req.params.id)
    }
};

export default {
    connections_get,
};