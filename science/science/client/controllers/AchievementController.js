const uuid = require('uuid')
const path = require('path');
const {Achievement, AchievementInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class AchievementController {
    async create(req, res, next) {
        try {
            let {name, tags, author, subjectId, typeId, universityId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const achievement = await Achievement.create({name, tags, author, subjectId, typeId, universityId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    AchievementInfo.create({
                        title: i.title,
                        description: i.description,
                        achievementId: achievement.id
                    })
                )
            }

            return res.json(achievement)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {subjectId, typeId, universityId} = req.query
        let achievements;
        if (!subjectId && !typeId && !universityId) {
            achievements = await Achievement.findAndCountAll()
        }
        if (!subjectId && !typeId  && universityId) {
            achievements = await Achievement.findAndCountAll({where:{universityId}})
        }
        if (!subjectId && typeId  && !universityId) {
            achievements = await Achievement.findAndCountAll({where:{typeId}})
        }
        if (subjectId && !typeId  && !universityId) {
            achievements = await Achievement.findAndCountAll({where:{subjectId}})
        }
        if (!subjectId && typeId  && universityId) {
            achievements = await Achievement.findAndCountAll({where:{typeId, universityId}})
        }
        if (subjectId && typeId  && !universityId) {
            achievements = await Achievement.findAndCountAll({where:{subjectId, typeId}})
        }
        if (subjectId && !typeId  && universityId) {
            achievements = await Achievement.findAndCountAll({where:{subjectId, universityId}})
        }
        if (subjectId && typeId  && universityId) {
            achievements = await Achievement.findAndCountAll({where:{subjectId, typeId, universityId}})
        }
        return res.json(achievements)
    }

    async getOne(req, res) {
        const {id} = req.params
        const achievement = await Achievement.findOne(
            {
                where: {id},
                include: [{model: AchievementInfo, as: 'info'}]
            },
        )
        return res.json(achievement)
    }
}

module.exports = new AchievementController()
