const {Patent} = require('../models/models')
const ApiError = require('../error/ApiError');

class PatentController {
    async create(req, res, next) {
        try {
            let {name, contract, year, author, subjectId, typeId, universityId} = req.body
            const patent = await Patent.create({name, contract, year, author, subjectId, typeId, universityId});
            return res.json(patent)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {subjectId, typeId, universityId} = req.query
        let patents;
        if (!subjectId && !typeId && !universityId) {
            patents = await Patent.findAndCountAll()
        }
        if (!subjectId && !typeId  && universityId) {
            patents = await Patent.findAndCountAll({where:{universityId}})
        }
        if (!subjectId && typeId  && !universityId) {
            patents = await Patent.findAndCountAll({where:{typeId}})
        }
        if (subjectId && !typeId  && !universityId) {
            patents = await Patent.findAndCountAll({where:{subjectId}})
        }
        if (!subjectId && typeId  && universityId) {
            patents = await Patent.findAndCountAll({where:{typeId, universityId}})
        }
        if (subjectId && typeId  && !universityId) {
            patents = await Patent.findAndCountAll({where:{subjectId, typeId}})
        }
        if (subjectId && !typeId  && universityId) {
            patents = await Patent.findAndCountAll({where:{subjectId, universityId}})
        }
        if (subjectId && typeId  && universityId) {
            patents = await Patent.findAndCountAll({where:{subjectId, typeId, universityId}})
        }
        return res.json(patents)
    }

    async getOne(req, res) {
        const {id} = req.params
        const patent = await Patent.findOne(
            {
                where: {id}
            },
        )
        return res.json(patent)
    }
}

module.exports = new PatentController()
