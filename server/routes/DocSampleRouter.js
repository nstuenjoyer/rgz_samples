const Router = require('express')
const router = new Router()
const checkRole = require('../middlewares/checkRoleMiddleware')

const docSampleController = require('../controllers/docSampleController')



router.post('/', checkRole("ADMIN"), docSampleController.create)
router.get('/', docSampleController.getAll)
router.delete('/', checkRole("ADMIN"), docSampleController.delete)
module.exports = router