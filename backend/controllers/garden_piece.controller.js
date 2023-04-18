const Garden_piece = require('../models/garden_piece.model')

exports.getGPieceList = (req, res)=>{
    Garden_piece.find({})
    .then(piece => res.status(200).send(piece))
    .catch(err => res.status(400).send(err))
}

exports.getPrivateGPiece = (req, res)=>{
    const query = { owner: req.params['owner'] }
    Garden_piece.find(query)
    .then(piece => res.status(200).send(piece))
    .catch(err => res.status(400).send(err))
}

exports.getGPieceById = (req,res)=>{
    console.log(req.params['id'])
    const query = { id: req.params['id']}
    Garden_piece.find(query)
    .then(piece => res.status(200).send(piece))
    .catch(err => res.status(400).send(err))
}