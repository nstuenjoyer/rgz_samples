const { University } = require('../models/models')
const ApiError = require('../error/ApiError')
class UniversityController {
    async create(req, res) {
        const { university } = req.body
        const universityobj = await University.create({ university })
        return res.json(universityobj)
    }

    async getAll(req, res) {
        const universities = await University.findAll()
        return res.json(universities)
    }
}

module.exports = new UniversityController