

function ping(req, res){
    return res.status(200).json({"code":"0"})
}


module.exports = {
    ping
}