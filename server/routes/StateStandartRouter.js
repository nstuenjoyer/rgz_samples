const Router = require('express')
const router = new Router()
const checkRole = require('../middlewares/checkRoleMiddleware')

const stateStandartController = require('../controllers/StateStandartController')


router.post('/', checkRole("ADMIN"), stateStandartController.create)
router.get('/', stateStandartController.getAll)
router.get('/:id', stateStandartController.getOne)

module.exports = router