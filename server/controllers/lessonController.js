const { Lesson } = require('../models/models')
const ApiError = require('../error/ApiError')

class SampleTypesController {
    async create(req, res, next) {
        const { name } = req.body
        const candidate = await Lesson.findOne({ where: { name } })
        if (candidate) {
            return next(ApiError.badRequest('Такое поле уже уже существует'))
        }
        const lesson = await Lesson.create({ name })
        return res.json(lesson)
    }

    async getAll(req, res) {
        const lessons = await Lesson.findAll()
        return res.json(lessons)
    }
    async delete(req, res) {
        const { id } = req.query
        let docSamples;
        docSamples = await Lesson.destroy({
            where: { id: id }
        })
        return res.json(docSamples)
    }

}

module.exports = new SampleTypesController