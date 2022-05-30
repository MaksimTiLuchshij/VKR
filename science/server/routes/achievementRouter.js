const Router = require('express')
const router = new Router()
const achievementController = require('../controllers/AchievementController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), achievementController.create)
router.get('/',achievementController.getAll)
router.get('/:id', achievementController.getOne)

module.exports = router
