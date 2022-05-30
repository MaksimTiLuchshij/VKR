const Router = require('express')
const router = new Router()
const universityController = require('../controllers/UniversityController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), universityController.create)
router.get('/', universityController.getAll)
router.delete('/:id', checkRoleMiddleware('ADMIN'), universityController.delete )

module.exports = router
