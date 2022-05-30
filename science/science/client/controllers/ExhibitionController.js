const {Exhibition} = require('../models/models')
const ApiError = require('../error/ApiError');

class ExhibitionController {
    async create(req, res, next) {
        try {
            let {type_work, place, year, name, author, qualification, prize_place, subjectId, typeId, universityId} = req.body
            const exhibition = await Exhibition.create({type_work, place, year, name, author, qualification, prize_place, subjectId, typeId, universityId});
            return res.json(exhibition)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {subjectId, typeId, universityId} = req.query
        let exhibitions;
        if (!subjectId && !typeId && !universityId) {
            exhibitions = await Exhibition.findAndCountAll()
        }
        if (!subjectId && !typeId  && universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{universityId}})
        }
        if (!subjectId && typeId  && !universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{typeId}})
        }
        if (subjectId && !typeId  && !universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{subjectId}})
        }
        if (!subjectId && typeId  && universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{typeId, universityId}})
        }
        if (subjectId && typeId  && !universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{subjectId, typeId}})
        }
        if (subjectId && !typeId  && universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{subjectId, universityId}})
        }
        if (subjectId && typeId  && universityId) {
            exhibitions = await Exhibition.findAndCountAll({where:{subjectId, typeId, universityId}})
        }
        return res.json(exhibitions)
    }

    async getOne(req, res) {
        const {id} = req.params
        const exhibition = await Exhibition.findOne(
            {
                where: {id}
            },
        )
        return res.json(exhibition)
    }
}

module.exports = new ExhibitionController()
