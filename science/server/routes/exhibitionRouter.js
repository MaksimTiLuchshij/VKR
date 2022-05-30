const Router = require('express')
const router = new Router()
const exhibitionController = require('../controllers/ExhibitionController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), exhibitionController.create)
router.get('/',exhibitionController.getAll)
router.get('/:id', exhibitionController.getOne)

module.exports = router
