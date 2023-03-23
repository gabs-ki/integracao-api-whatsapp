
var listaContatos = require('../contatos.js')

let contatos = listaContatos.contatos['whats-users']

const getContato = function(numero, indice) {
    let numeroContato = numero
    let contatosJson = {}
    let status

    contatos.forEach(function (numeroIdentificador){

        if(numeroContato == numeroIdentificador.number && numeroContato != undefined) {
                contatosJson = {
                    contatos: numeroIdentificador.contacts
                }
                
        } else {
            status = false
        }
        
    })
        
    

    if (contatosJson == null) {
        status = false
        
    } else {
        status = contatosJson
        
    } 
    return status
    
}

module.exports = {
    getContato
}