const { Sample_types } = require('../models/models')
const ApiError = require('../error/ApiError')

class SampleTypesController {
    async create(req, res, next) {
        const { type } = req.body
        const candidate = await Sample_types.findOne({ where: { type } })
        if (candidate) {
            return next(ApiError.badRequest('Такое поле уже уже существует'))
        }
        const sampletypeobj = await Sample_types.create({ type })
        return res.json(sampletypeobj)
    }

    async getAll(req, res) {
        const sampletypes = await Sample_types.findAll()
        return res.json(sampletypes)
    }
    async delete(req, res) {
        const { id } = req.query
        let docSamples;
        docSamples = await Sample_types.destroy({
            where: { id: id }
        })

        return res.json(docSamples)
    }

}

module.exports = new SampleTypesController