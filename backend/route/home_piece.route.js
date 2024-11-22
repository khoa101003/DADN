const express = require('express')
const Home_pieceController = require('../controllers/home_piece.controller')

module.exports = app=>{
    router = express.Router()
    router.get('/',Home_pieceController.getGPieceList)
    router.get('/:owner',Home_pieceController.getPrivateGPiece)
    router.get('/detail/:id', Home_pieceController.getGPieceById)
    router.delete('/delete/:id', Home_pieceController.delGPiece)
    router.post('/', Home_pieceController.handleRequest)
    app.use('/api/home-piece',router)
}