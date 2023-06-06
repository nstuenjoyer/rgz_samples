const Router = require('express')
const router = new Router()
const checkRole = require('../middlewares/checkRoleMiddleware')
const universityController = require('../controllers/universityController')


router.post('/', checkRole("ADMIN"), universityController.create)
router.get('/', universityController.getAll)

module.exports = router