const Router = require('express')
const router = new Router()
const checkRole = require('../middlewares/checkRoleMiddleware')

const lessonController = require('../controllers/lessonController')


router.post('/', checkRole("ADMIN"), lessonController.create)
router.get('/', lessonController.getAll)

module.exports = router