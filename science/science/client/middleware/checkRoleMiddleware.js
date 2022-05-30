const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            //Из header берем токен (в header помещают типо токена а потом сам токен)
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Пользователь не авторизован"})
            }
            //Если токен есть, раскодируем его. Verify проверяет токен на валидность
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                return res.status(401).json({message: "Нет доступа"})
            }
            req.user = decoded
            //Вызываем следующий middleware
            next()
        } catch (e) {
            res.status(401).json({message: "Пользователь не авторизован"})
        }
    }
}

