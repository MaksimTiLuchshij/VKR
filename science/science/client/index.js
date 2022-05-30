require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandlingMiddleware = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
//Используем для парсинга json
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//Обработка ошибок, последний middleware
app.use(errorHandlingMiddleware)
//Функция подключения к бд
//Делаем функцию асинхронной, т.к все функции в бд асинхронны
const start = async () =>{
    try {
        //Подключаемся к бд с помощью authenticate
        await sequelize.authenticate()
        //Сверяет состояние бд со схемой бд
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`App started on port ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}
start()
