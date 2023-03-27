
var listaContatos = require('../contatos.js')

let contatos = listaContatos.contatos['whats-users']

const getContato = function(numero) {
    let numeroContato = numero
    let contatosJson = false
    let contatosArray = []
    let status

    listaContatos.contatos['whats-users'].forEach(function (numeroIdentificador){

        if(numeroContato == numeroIdentificador.number) {
                numeroIdentificador.contacts.forEach(function(contato){
                    contatosArray.push(contato)
                })
                
        } 
        
    })

    if (numeroContato.length > 0) {
        contatosJson = {}
        contatosJson.contatos = contatosArray
    }
        
    return contatosJson

    
}




module.exports = {
    getContato
}