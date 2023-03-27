
const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const contatosDoBack = require('./Js/main.js')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

app.get('/v1/senai/contatos/numero/:digitos', cors(), async function(request, response, next){

    let statusCode
    let dadosContatos = {}

    let digitosContatos = request.params.digitos

    if( digitosContatos == null || digitosContatos.length < 11 || isNaN(digitosContatos) || digitosContatos == undefined || digitosContatos == ''){

        statusCode == 400

        dadosContatos.message = 'Não foi possível acessar os dados'

    } else {
        let contatos = contatosDoBack.getContato(digitosContatos)
        if (digitosContatos) {
            statusCode = 200
            dadosContatos = contatos
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosContatos)

})

app.listen(8080, function( ) {
    console.log('Servidor aguardando requisições na porta 8080')
})