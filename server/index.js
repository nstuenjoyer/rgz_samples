require('dotenv').config();
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT
const models = require('./models/models')
const cors = require('cors')
const app = express()
const router = require('./routes/index')
const errorHandler = require('./middlewares/ErrorHandlingMiddleware')
const fileupload = require('express-fileupload')
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/api', router)



app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server up ${PORT}`))
    } catch (e) {

        console.log(e)
    }
}

start()