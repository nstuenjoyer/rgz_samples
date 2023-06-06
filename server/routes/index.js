const Router = require('express')
const router = new Router()
const UserRouter = require('./userRouter')
const DocSampleRouter = require('./DocSampleRouter')
const SampleTypesRouter = require('./SampleTypesRouter')
const UniversityRouter = require('./UniversityRouter')
const LessonRouter = require('./LessonRouter')

router.use('/user', UserRouter)
router.use('/lesson', LessonRouter)
router.use('/docsample', DocSampleRouter)
router.use('/university', UniversityRouter)
router.use('/sampletypes', SampleTypesRouter)

module.exports = router