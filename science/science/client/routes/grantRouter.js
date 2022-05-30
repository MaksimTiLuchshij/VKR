const Router = require('express')
const router = new Router()
const grantController = require('../controllers/GrantController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), grantController.create)
router.get('/',grantController.getAll)
router.get('/:id', grantController.getOne)

module.exports = router
