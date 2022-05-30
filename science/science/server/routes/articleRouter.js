const Router = require('express')
const router = new Router()
const articleController = require('../controllers/ArticleController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), articleController.create)
router.get('/',articleController.getAll)
router.get('/:id', articleController.getOne)

module.exports = router
