const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User, List_doc_samples } = require('../models/models')

const generateJwt = (id, email, role) => {
    (token = jwt.sign({ id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    ))
    return token
}

class UserController {


    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPass = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPass })
        const List_doc = await List_doc_samples.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePass = bcrypt.compareSync(password, user.password)
        if (!comparePass) {
            return next(ApiError.internal('Введен неправильный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async check(req, res, next) {
        console.log(req.user.id)
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }

}

module.exports = new UserController