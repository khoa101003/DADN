const express = require('express')
const Garden_pieceController = require('../controllers/garden_piece.controller')

module.exports = app=>{
    router = express.Router()
    router.get('/',Garden_pieceController.getGPieceList)
    router.get('/:owner',Garden_pieceController.getPrivateGPiece)
    router.get('/detail/:id', Garden_pieceController.getGPieceById)
    app.use('/api/garden-piece',router)
}