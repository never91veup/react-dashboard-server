const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    sum: {type: DataTypes.INTEGER},
})

User.hasOne(Basket, { onDelete: 'cascade' });
Basket.belongsTo(User);

module.exports = {
    User,
    Basket
}

