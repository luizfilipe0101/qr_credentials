const check = require('../models/checkin_Models');

// req.body contém o code de participante vindo do front-end

async function check_in(req, res){

    const status = await check.check_in(req.body);

    if(status[0]['affectedRows'] === 0){
        res.status(201).json([{'msg':"Participante não encontrado"},{"codigo":2}]);

    } else if(status[0]['affectedRows'] === 1 && status[0]['changedRows'] === 0){
        res.status(201).json([{'msg':"Participante já foi checado - Presente"},
    {"codigo":1}]);

    } else if(status[0]['affectedRows'] === 1 && status[0]['changedRows'] === 1){
        res.status(201).json([{'msg':"Check-in realizado com sucesso!"},
    {"codigo":0}]);
        
    } else{
        res.status(201).json([{'msg':"Resultado inesperado"}, {"codigo":5}])
    }
    
}


module.exports = {
    check_in
}