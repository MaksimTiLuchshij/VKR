const {University} = require('../models/models')
const ApiError = require('../error/ApiError')
class UniversityController{
    async create(req, res, next) {
        try {
            const {name} = req.body
            const university = await University.create({name})
            return res.json(university)
        } catch (e) {
            //Передаем в параметре ошибку (сообщение, которое лежит в ошибке)
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        const universities = await University.findAll()
        return  res.json(universities)
    }
    async delete(req, res, next){
        try {
            const { id } = req.params;
            const university = await University.destroy({where: {id:id}})
            return res.json(university)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new UniversityController()
