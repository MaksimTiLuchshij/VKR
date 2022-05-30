const {Subject} = require('../models/models')
const ApiError = require('../error/ApiError')
class SubjectController{
    async create(req, res, next) {
        try {
            const {name} = req.body
            const subject = await Subject.create({name})
            return res.json(subject)
        } catch (e) {
            //Передаем в параметре ошибку (сообщение, которое лежит в ошибке)
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        const subjects = await Subject.findAll()
        return  res.json(subjects)
    }

    async update(req, res, next){
        try {
            const { id } = req.params;
            const [updated ] = await Subject.update(req.body, {
                where:{id}
            })
            const updateSubject = await Subject.findOne({where: {id}})
            return res.json(updateSubject)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next){
        try {
            const { id } = req.params;
            const subject = await Subject.destroy({where: {id:id}})
            return res.json(subject)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new SubjectController()
