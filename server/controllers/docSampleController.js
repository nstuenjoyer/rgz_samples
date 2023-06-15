const uuid = require('uuid')
const path = require('path')
const fs = require("fs");
const ApiError = require('../error/ApiError')
const { Doc_sample } = require('../models/models')
class DocSampleController {
    async create(req, res, next) {
        try {
            let { name, LessonId, universityId, sampleTypeId } = req.body
            let { docx_sample } = req.files
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
        let offset = page * limit - limit
        if (!LessonId && !universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ limit, offset })
        }
        if (LessonId && !universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId }, limit, offset })
        }
        if (!LessonId && universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { universityId }, limit, offset })
        }
        if (!LessonId && !universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { sampleTypeId }, limit, offset })
        }
        if (LessonId && universityId && !sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId, universityId }, limit, offset })
        }
        if (LessonId && !universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId, sampleTypeId }, limit, offset })
        }
        if (!LessonId && universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { universityId, sampleTypeId }, limit, offset })
        }
        if (LessonId && universityId && sampleTypeId) {
            docSamples = await Doc_sample.findAndCountAll({ where: { LessonId, universityId, sampleTypeId }, limit, offset })
        }
        return res.json(docSamples)
    }

    async delete(req, res) {
        const { id, docx_sample } = req.query
        let docSamples;
        docSamples = await Doc_sample.destroy({
            where: { id: id }
        })
        let fileName = docx_sample
        let filePath = (path.resolve(__dirname, '..', 'static', fileName))
        fs.unlink(filePath, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
            }
        });
        return res.status(200).json({ message: "пользователь удален" })
    }
}

module.exports = new DocSampleController