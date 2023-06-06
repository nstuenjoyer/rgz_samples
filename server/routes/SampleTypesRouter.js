const Router = require('express')
const router = new Router()
const checkRole = require('../middlewares/checkRoleMiddleware')

const sampleTypesController = require('../controllers/sampleTypesController')



router.post('/', checkRole("ADMIN"), sampleTypesController.create)
router.get('/', sampleTypesController.getAll)

module.exports = router