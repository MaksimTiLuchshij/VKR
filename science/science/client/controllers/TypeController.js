//Импортируем модель типа и обработчик ошибок
const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController{
    async create(req, res, next) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        }
        catch (e) {
            //Передаем в параметре ошибку (сообщение, которое лежит в ошибке)
            next(ApiError.badRequest(e.message))
    }

    }
    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }

    async update(req, res, next){
        try {
            const { id } = req.params;
            const [updated] = await Type.update(req.body, {
                where:{id}
            })
            const updateBrand = await Type.findOne({where: {id}})
            return res.json(updateBrand)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next){
        try {
            const { id } = req.params;
            const type = await Type.destroy({where: {id:id}})
            return res.json(type)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new TypeController()
