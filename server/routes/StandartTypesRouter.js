const Router = require('express')
const router = new Router()
const checkRole = require('../middlewares/checkRoleMiddleware')

const standartTypesController = require('../controllers/standartTypesController')


router.post('/', checkRole("ADMIN"), standartTypesController.create)
router.get('/', standartTypesController.getAll)

module.exports = router