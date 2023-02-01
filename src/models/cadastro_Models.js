const conn = require('./connection_db');


async function postParticipante(user){

    const {nome, cpf, email, genero, cidade, estado, code} = user;
    const key = Date.now() - cpf; 

    const query = "INSERT INTO participante(nome, cpf, email, genero,\
        cidade, estado, code) VALUES (?, ?, ?, ?, ?, ?, ?) ";

    await conn.execute(query, [nome, cpf, email, genero,
        cidade, estado, code]);

}


module.exports = {
    postParticipante
}