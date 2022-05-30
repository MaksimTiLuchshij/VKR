const ApiError = require('../error/ApiError')
//В функцию передаем ошибку, запрос, ответ и next, которая при вызове передает управление следующему в цепочке middleware
module.exports = function (err, req, res, next){
    if( err instanceof ApiError){
        return res.status(err.status).json({message: err.message})
    }
    //Если попала ошибка, не являющаяса ApiError
    return res.status(500).json({message: "Непредвиденная ошибка"})
}
