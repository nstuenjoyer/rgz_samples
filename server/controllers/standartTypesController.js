const { Standart_types } = require('../models/models')
const ApiError = require('../error/ApiError')

class StandartTypesController {
    async create(req, res) {
        const { type } = req.body
        const standarttypeobj = await Standart_types.create({ type })
        return res.json(standarttypeobj)
    }

    async getAll(req, res) {
        const standarttypes = await Standart_types.findAll()
        return res.json(standarttypes)
    }


}

module.exports = new StandartTypesController