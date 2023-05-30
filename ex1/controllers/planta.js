var planta = require("../models/planta")


module.exports.list = () => {
    return planta
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listOne = id => {
    return planta
            .findOne({_id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getEspecie = esp => {
    return planta
        .find({Espécie : esp})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


module.exports.getImplant = imp => {
    return planta
        .find({'Implantação': imp})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getFregAll = () => {
    return planta
        .distinct("Freguesia")
        .sort()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getEspecieAll = () => {
    return planta
        .distinct("Espécie")
        .sort()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addPlanta = l => {
    return planta.create(l)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return planta.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}