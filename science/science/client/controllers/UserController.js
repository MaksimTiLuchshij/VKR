const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

//Генерация jwt-токена
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        //Время жизни токена
        {expiresIn: '2h'}
    )
}

class UserController{
    async registration(req, res, next){
        const {email, password, role } = req.body

        const candidate  = await User.findOne({where:{email}})
        if (candidate){
            return next(ApiError.badRequest('Пользователь с введенным e-mail уже существует!'))
        }
        //Хеширование пароля
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email,password:hashPassword, role})
        const id = req.params.id
        await console.log('----------------' + id)
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.forbidden('Пользователь с таким логином не найден'))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(ApiError.internal('Неверно введен пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    //Генерация токена и отправка на клиент
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
