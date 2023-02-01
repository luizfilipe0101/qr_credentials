const post_models = require('../models/cadastro_Models');


async function post_P(request, response){

    try{
        const data = await post_models.postParticipante(request.body);
        response.status(201).json(request.body);
    }catch(err){
        console.log(err)
    }

}


module.exports = {
    post_P
}