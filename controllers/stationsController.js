'use strict';
import station from '../models/Stations.js';

const station_list_get = async (req, res) => {
    res.send(await station.find());
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