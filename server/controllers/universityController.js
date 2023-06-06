const { University } = require('../models/models')
const ApiError = require('../error/ApiError')
class UniversityController {
    async create(req, res, next) {
        const { university } = req.body
        const candidate = await University.findOne({ where: { university } })
        if (candidate) {
            return next(ApiError.badRequest('Такое поле уже уже существует'))
        }
        const universityobj = await University.create({ university })
        return res.json(universityobj)
    }

    async getAll(req, res) {
        const universities = await University.findAll()
        return res.json(universities)
    }
    async delete(req, res) {
        const { id } = req.query
        let docSamples;
        docSamples = await University.destroy({
            where: { id: id }
        })
        return res.json(docSamples)
    }
}

module.exports = new UniversityController