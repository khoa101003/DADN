const { response } = require('express')
const Home_piece = require('../models/home_piece.model')

exports.getHomePName = async (id) => {
    const name = await Home_piece.find({ 'id': id })
        .then(piece => {
            return piece[0].name
        })
        .catch(err => console.log(err))

    return name
}

exports.getGPieceList = (req, res) => {
    Home_piece.find({})
        .then(piece => res.status(200).send(piece))
        .catch(err => res.status(400).send(err))
}

exports.getPrivateGPiece = (req, res) => {
    const query = { owner: req.params['owner'] }
    Home_piece.find(query)
        .then(piece => res.status(200).send(piece))
        .catch(err => res.status(400).send(err))
}

exports.getGPieceById = (req, res) => {
    const query = { id: req.params['id'] }
    Home_piece.find(query)
        .then(piece => res.status(200).send(piece))
        .catch(err => res.status(400).send(err))
}

exports.delGPiece = (req, res) => {
    Home_piece.findOneAndDelete({ id: req.params['id'] })
        .then(data => console.log(data))
        .catch(err => res.status(400).send(err))
}

exports.handleRequest = (req, res) => {
    const data = req.body
    const request = data.request
    if (request == "add") {
        Home_piece.findOne({})
            .sort({ id: 'desc' })
            .then(latest => {
                if (latest != null)
                    data.id = latest.id + 1;
                else data.id = 1;

                Home_piece.insertMany([
                    {
                        id: data.id,
                        name: data.name,
                        type: data.type,
                        location: data.location,
                        owner: data.owner,
                        area: data.area,
                        days: 20
                    }
                ])
            }).then(item => res.status(200).send(item))
            .catch(err => res.status(400).send(err))
    } else {
        const id = data.id
        Home_piece.collection.updateOne(
            { "id": parseInt(id) },
            {
                $set: {
                    name: data.name,
                    type: data.type,
                    location: data.location,
                    owner: data.owner,
                    area: data.area,
                }
            }
        ).then(item => res.status(200).send(item))
            .catch(err => res.status(400).send(err))
    }
    // res.status(200).send('OK')
}