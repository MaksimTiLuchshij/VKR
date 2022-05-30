const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Achievement = sequelize.define('achievement',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    tags: {type: DataTypes.STRING, allowNull:false},
    author: {type: DataTypes.STRING, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false},
})

const Article = sequelize.define('article',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    present_form: {type: DataTypes.STRING, allowNull:false},
    year: {type: DataTypes.INTEGER, allowNull:false},
    author: {type: DataTypes.STRING, allowNull:false},
    title: {type: DataTypes.STRING, allowNull:false},
    journal_name: {type: DataTypes.STRING, allowNull:false},
})

const Exhibition = sequelize.define('exhibition',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type_work: {type: DataTypes.STRING, allowNull:false},
    place: {type: DataTypes.STRING, allowNull:false},
    year: {type: DataTypes.INTEGER, allowNull:false},
    name: {type: DataTypes.STRING, allowNull:false},
    author: {type: DataTypes.STRING, allowNull:false},
    qualification: {type: DataTypes.STRING, allowNull:false},
    prize_place: {type: DataTypes.STRING, allowNull:false},
})


const Patent = sequelize.define('patent',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    contract: {type: DataTypes.STRING, allowNull:false},
    year: {type: DataTypes.INTEGER, allowNull:false},
    author: {type: DataTypes.STRING, allowNull:false},
})

const Grant = sequelize.define('grant',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    competition: {type: DataTypes.STRING, allowNull:false},
    grantor: {type: DataTypes.STRING, allowNull:false},
    author: {type: DataTypes.STRING, allowNull:false},
    qualification: {type: DataTypes.STRING, allowNull:false},
    sum: {type: DataTypes.INTEGER, allowNull:false},
})


const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const Subject = sequelize.define('subject',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const University = sequelize.define('university',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const AchievementInfo = sequelize.define('achievement_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})




Achievement.hasMany(AchievementInfo, {as: 'info'});
AchievementInfo.belongsTo(Achievement)

Type.hasMany(Achievement)
Achievement.belongsTo(Type)

Subject.hasMany(Achievement)
Achievement.belongsTo(Subject)

University.hasMany(Achievement)
Achievement.belongsTo(University)

//Для статей
Type.hasMany(Article)
Article.belongsTo(Type)

Subject.hasMany(Article)
Article.belongsTo(Subject)

University.hasMany(Article)
Article.belongsTo(University)


//Для выставок
Type.hasMany(Exhibition)
Exhibition.belongsTo(Type)

Subject.hasMany(Exhibition)
Exhibition.belongsTo(Subject)

University.hasMany(Exhibition)
Exhibition.belongsTo(University)

//Для патентов
Type.hasMany(Patent)
Patent.belongsTo(Type)

Subject.hasMany(Patent)
Patent.belongsTo(Subject)

University.hasMany(Patent)
Patent.belongsTo(University)

//Для грантов
Type.hasMany(Grant)
Grant.belongsTo(Type)

Subject.hasMany(Grant)
Grant.belongsTo(Subject)

University.hasMany(Grant)
Grant.belongsTo(University)

module.exports = {
    User, Achievement, Subject, Type, University, Article, Exhibition, Patent, Grant, AchievementInfo
}
