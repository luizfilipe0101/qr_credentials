const conn = require('./connection_db');


/*
    Regras para check-in

    1- Participante deve existir no banco de dados
    2- Status de presença deve estar != de Presente
    2- Status de pagamento deve estar Aprovado

*/
async function check_in(code){

    const {code_num} = code;
    const query = 'UPDATE participante SET checked = ? WHERE code = ?';
    const status = await conn.execute(query, ['Presente', code_num]);
    return status;
}


module.exports = {
    check_in
}