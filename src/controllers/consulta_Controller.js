const consulta_models = require('../models/consulta_Models');



const getAll_c = async (_request, response) => {

    const data = await consulta_models.getAll();
    return response.status(200).json(data);
}

async function get_QR(request, response){
    const data = await consulta_models.check_QR(request.body);

    if(data.length === 0){
        return response.status(200).json([{"msg":"Participante não encontrado"},
    {"codigo":1}]);

    }else{
        return response.status(200).json([data, {"codigo":0}]);
    }
    
}

async function show_presence(req, res){
    const data = await consulta_models.show_presence();
    return res.status(200).json(data)
}


module.exports = {
    getAll_c,
    get_QR,
    show_presence
}