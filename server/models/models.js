const sequelize = require('../db')
const { DataType, DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const List_doc_samples = sequelize.define('list_doc_samples', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Doclist_item = sequelize.define('doclist_item', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }

})

const Doc_sample = sequelize.define('doc_sample', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    docx_sample: { type: DataTypes.STRING, allowNull: false }
})

const Lesson = sequelize.define('Lesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
})

const University = sequelize.define('university', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    university: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Sample_types = sequelize.define('sample_types', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const State_standart_list = sequelize.define('state_standart_list', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})

const State_standart = sequelize.define('state_standart', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false }
})

const Standart_types = sequelize.define('standart_types', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const UserSampleList = sequelize.define('user_sample_list', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

User.hasOne(List_doc_samples)
List_doc_samples.belongsTo(User)

List_doc_samples.hasMany(Doclist_item)
Doclist_item.belongsTo(List_doc_samples)

Doc_sample.hasOne(Doclist_item)
Doclist_item.belongsTo(Doclist_item)

University.hasMany(Doc_sample)
Doc_sample.belongsTo(University)

Sample_types.hasMany(Doc_sample)
Doc_sample.belongsTo(Sample_types)

Lesson.hasMany(Doc_sample)
Doc_sample.belongsTo(Lesson)

State_standart_list.belongsToMany(User, { through: UserSampleList })
User.belongsToMany(State_standart_list, { through: UserSampleList })

State_standart_list.hasMany(State_standart)
State_standart.belongsTo(State_standart_list)

Standart_types.hasMany(State_standart)
State_standart.belongsTo(Standart_types)

module.exports = {
    User,
    List_doc_samples,
    Doclist_item,
    Doc_sample,
    University,
    Sample_types,
    State_standart_list,
    State_standart,
    Standart_types,
    UserSampleList,
    Lesson
}