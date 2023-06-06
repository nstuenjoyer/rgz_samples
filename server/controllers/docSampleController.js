const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const { Doc_sample } = require('../models/models')
class DocSampleController {
    async create(req, res, next) {
        try {
            const { name, LessonId, universityId, sampleTypeId } = req.body
            const { docx_sample } = req.files
            let fileName = uuid.v4() + ".docx"
            docx_sample.mv(path.resolve(__dirname, '..', 'static', fileName))

            const docSample = await Doc_sample.create({ name, universityId, LessonId, sampleTypeId, docx_sample: fileName })

            return res.json(docSample)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const { LessonId, universityId, sampleTypeId, limit, page } = req.query
        let docSamples;
        let npage = page || 1
        let nlimit = limit || 9
        let offset = npage * nlimit - nlimit
        if (!LessonId && !universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ nlimit, offset })
        }
        if (LessonId && !universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId }, nlimit, offset })
        }
        if (!LessonId && universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { universityId }, nlimit, offset })
        }
        if (!LessonId && !universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { sampleTypeId }, nlimit, offset })
        }
        if (LessonId && universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId, universityId }, nlimit, offset })
        }
        if (LessonId && !universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId, sampleTypeId }, nlimit, offset })
        }
        if (!LessonId && universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { universityId, sampleTypeId }, nlimit, offset })
        }
        if (LessonId && universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId, universityId, sampleTypeId }, nlimit, offset })
        }
        return res.json(docSamples)
    }


}

module.exports = new DocSampleController