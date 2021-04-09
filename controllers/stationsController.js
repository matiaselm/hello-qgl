'use strict';
import station from '../models/Stations.js';
import Level from '../models/Levels.js';
import ConnectionType from '../models/ConnectionTypes.js';
import CurrentType from '../models/CurrentTypes.js';
import rectangleBounds from '../utils/rectangleBounds.js';

const station_list_get = async (req, res) => {

    try {
        const bottomLeft = req.query.bottomLeft;
        const topRight = req.query.topRight;
        const limit = req.query.limit;

        if (topRight && bottomLeft) {
            const area = rectangleBounds(JSON.parse(topRight), JSON.parse(bottomLeft));
            station.find()
                .where('Location')
                .within(area)
                .limit(Number(limit) ?? 10)
                .populate({
                    path: 'Connections',
                    populate: { path: 'ConnectionTypeID', model: ConnectionType }
                })
                .populate({
                    path: 'Connections',
                    populate: { path: 'LevelID', model: Level },
                })
                .populate({
                    path: 'Connections',
                    populate: { path: 'CurrentTypeID', model: CurrentType }
                }).exec((err, response) => {
                    console.log('Response length:', response.length)
                    res.send(response)
                })
        } else {
            station.find()
                .where('Location')
                .limit(Number(limit) ?? 10)
                .populate({
                    path: 'Connections',
                    populate: { path: 'ConnectionTypeID', model: ConnectionType }
                })
                .populate({
                    path: 'Connections',
                    populate: { path: 'LevelID', model: Level },
                })
                .populate({
                    path: 'Connections',
                    populate: { path: 'CurrentTypeID', model: CurrentType }
                }).exec((err, response) => {
                    if (err) res.send(err)
                    console.log('Limited resp to: ' + response.length)
                    res.json(response)
                })
        }
    } catch (e) {
        res.send(e.message)
    }
};

const station_get = async (req, res) => {
    try {
        res.send(await station.findById(req.params.id));
    } catch (e) {
        res.send('Cant find station with id ' + req.params.id)
    }
};

const station_post = async (req, res) => {
    const post = await station.create({
        Title: req.body.Title,
        AddressLine1: req.body.AddressLine1,
        Town: req.body.Town,
        StateOrProvince: req.body.StateOrProvince,
        PostCode: req.body.PostCode,
    });
    res.send(`station post ${post.Title} created with id: ${post._id}`);
}

const station_put = async (req, res) => {
    const mod = await station.updateOne({ _id: req.params.id }, { Title: req.body.Title });
    res.status(200).send(`updated sucessfully ${mod.nModified} station post`);
};

const station_delete = async (req, res) => {
    const del = await station.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} station post`);
};

export default {
    station_list_get,
    station_get,
    station_post,
    station_put,
    station_delete
};