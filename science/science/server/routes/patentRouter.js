const Router = require('express')
const router = new Router()
const patentController = require('../controllers/PatentController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), patentController.create)
router.get('/',patentController.getAll)
router.get('/:id', patentController.getOne)

module.exports = router
