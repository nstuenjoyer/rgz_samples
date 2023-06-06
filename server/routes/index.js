const Router = require('express')
const router = new Router()
const UserRouter = require('./userRouter')
const DocSampleRouter = require('./DocSampleRouter')
const SampleTypesRouter = require('./SampleTypesRouter')
const StateStandartRouter = require('./StateStandartRouter')
const UniversityRouter = require('./UniversityRouter')
const StandartTypesRouter = require('./StandartTypesRouter')
const LessonRouter = require('./LessonRouter')

router.use('/user', UserRouter)
router.use('/lesson', LessonRouter)
router.use('/docsample', DocSampleRouter)
router.use('/university', UniversityRouter)
router.use('/sampletypes', SampleTypesRouter)
router.use('/statestandart', StateStandartRouter)
router.use('/standarttypes', StandartTypesRouter)

module.exports = router