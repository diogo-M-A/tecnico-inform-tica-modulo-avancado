const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const usuarioMid = require('../middleware/validarUsuario.middleware')

const usuarios = {}

router.get('/:id', (req, res) => {
    res.json({usuarios: usuarios[req.params.id]})
})

router.put('/', usuarioMid)

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && usuarios[id]){
        delete usuarios[id]
        res.json({msg: "Usuário deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Usuário não encontrado!"})
    }
})

router.post('/', usuarioMid)

router.get('/', (req, res) => {
    res.json({usuarios: Object.values(usuarios)})
})

module.exports = router