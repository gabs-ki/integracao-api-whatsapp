'use strict'

export const procurarContatosApi = async (numeroPesquisar) => {
    const url = `http://localhost:8080/v1/senai/contatos/numero/${numeroPesquisar}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}
