class ApiError extends Error{
    //Класс расширяет Error
    //Конструктор будет принимать статус-код и сообщение, которое будет возвращаться на клиент
    constructor(status, message) {
        //Вызываем родительский конструктор и присваиваем то, что получаем параметрами
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiError(404, message)
    }

    static forbidden(message){
        return new ApiError(403, message)
    }

    static internal(message){
        return new ApiError(500, message)
    }
}

module.exports = ApiError
