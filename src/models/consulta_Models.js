const conn = require('./connection_db');


const getAll = async () => {
    try{
        const data = await conn.execute('SELECT * FROM participante');
        return data[0];
    }catch(err){
        return 'Não foi possível se conectar ao banco de dados.'
    }
}

async function check_QR(qr){

    const {qr_value} = qr;

    const query = 'SELECT * FROM participante WHERE code = ?';
    const data = await conn.execute(query, [qr_value]);
    return data[0];
}


async function show_presence(){
    const query = "SELECT * FROM participante WHERE checked = 'Presente'";
    const data = await conn.execute(query)
    return data[0];
}

module.exports = {
    getAll,
    check_QR,
    show_presence
}
