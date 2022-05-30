const Router = require('express')
const router = new Router()
const subjectController = require('../controllers/SubjectController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'), subjectController.create)
router.get('/', subjectController.getAll)
router.put('/:id', checkRoleMiddleware('ADMIN'), subjectController.update)
router.delete('/:id', checkRoleMiddleware('ADMIN'), subjectController.delete )

module.exports = router
