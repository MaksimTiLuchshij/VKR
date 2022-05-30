const {Article} = require('../models/models')
const ApiError = require('../error/ApiError');

class ArticleController {
    async create(req, res, next) {
        try {
            let {name, present_form, year, author, title, journal_name, subjectId, typeId, universityId} = req.body
            const article = await Article.create({name, present_form, year, author, title, journal_name, subjectId, typeId, universityId});
            return res.json(article)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {subjectId, typeId, universityId} = req.query
        let articles;
        if (!subjectId && !typeId && !universityId) {
            articles = await Article.findAndCountAll()
        }
        if (!subjectId && !typeId  && universityId) {
            articles = await Article.findAndCountAll({where:{universityId}})
        }
        if (!subjectId && typeId  && !universityId) {
            articles = await Article.findAndCountAll({where:{typeId}})
        }
        if (subjectId && !typeId  && !universityId) {
            articles = await Article.findAndCountAll({where:{subjectId}})
        }
        if (!subjectId && typeId  && universityId) {
            articles = await Article.findAndCountAll({where:{typeId, universityId}})
        }
        if (subjectId && typeId  && !universityId) {
            articles = await Article.findAndCountAll({where:{subjectId, typeId}})
        }
        if (subjectId && !typeId  && universityId) {
            articles = await Article.findAndCountAll({where:{subjectId, universityId}})
        }
        if (subjectId && typeId  && universityId) {
            articles = await Article.findAndCountAll({where:{subjectId, typeId, universityId}})
        }
        return res.json(articles)
    }

    async getOne(req, res) {
        const {id} = req.params
        const article = await Article.findOne(
            {
                where: {id}
            },
        )
        return res.json(article)
    }
}

module.exports = new ArticleController()
