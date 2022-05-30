const {Grant} = require('../models/models')
const ApiError = require('../error/ApiError');

class GrantController {
    async create(req, res, next) {
        try {
            let {name, competition, grantor, author, qualification, sum, subjectId, typeId, universityId} = req.body
            const grant = await Grant.create({name, competition, grantor, author, qualification, sum, subjectId, typeId, universityId});
            return res.json(grant)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {subjectId, typeId, universityId} = req.query
        let grants;
        if (!subjectId && !typeId && !universityId) {
            grants = await Grant.findAndCountAll()
        }
        if (!subjectId && !typeId  && universityId) {
            grants = await Grant.findAndCountAll({where:{universityId}})
        }
        if (!subjectId && typeId  && !universityId) {
            grants = await Grant.findAndCountAll({where:{typeId}})
        }
        if (subjectId && !typeId  && !universityId) {
            grants = await Grant.findAndCountAll({where:{subjectId}})
        }
        if (!subjectId && typeId  && universityId) {
            grants = await Grant.findAndCountAll({where:{typeId, universityId}})
        }
        if (subjectId && typeId  && !universityId) {
            grants = await Grant.findAndCountAll({where:{subjectId, typeId}})
        }
        if (subjectId && !typeId  && universityId) {
            grants = await Grant.findAndCountAll({where:{subjectId, universityId}})
        }
        if (subjectId && typeId  && universityId) {
            grants = await Grant.findAndCountAll({where:{subjectId, typeId, universityId}})
        }
        return res.json(grants)
    }

    async getOne(req, res) {
        const {id} = req.params
        const grant = await Grant.findOne(
            {
                where: {id}
            },
        )
        return res.json(grant)
    }
}

module.exports = new GrantController()
