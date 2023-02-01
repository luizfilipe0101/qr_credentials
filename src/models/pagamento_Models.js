const conn = require('./connection_db');


async function pag_aprov(cpf){

    const {cpf_value} = cpf;

    const query = "UPDATE participante SET pagamento = ? WHERE cpf = ?";
    const data = await conn.execute(query,['Aprovado', cpf_value]);

}


module.exports = {
    pag_aprov
}