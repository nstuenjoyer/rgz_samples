const { Sample_types } = require('../models/models')
const ApiError = require('../error/ApiError')

class SampleTypesController {
    async create(req, res) {
        const { type } = req.body
        const sampletypeobj = await Sample_types.create({ type })
        return res.json(sampletypeobj)
    }

    async getAll(req, res) {
        const sampletypes = await Sample_types.findAll()
        return res.json(sampletypes)
    }


}

module.exports = new SampleTypesController