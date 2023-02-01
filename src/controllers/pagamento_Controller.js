const pag_models = require('../models/pagamento_Models');


async function apv_pag(req, res){
    await pag_models.pag_aprov(req.body);
    return res.status(201).json({"msg":'Done'});
}


module.exports = {
    apv_pag
}