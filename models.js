const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const SALT = 12;

const sequelize = new Sequelize({
    database : 'final_auth',
    dialect : 'postgres',
    operatorsAliases : false,
    define : {
        underscored : true
    },
});

const User = sequelize.define('user', {
    name : Sequelize.STRING,
    password : Sequelize.STRING,
});

User.beforeCreate(async (user, options) => {
    const pwHash = await bcrypt.hash(user.password, SALT);
    user.password = pwHash;
});

const Weapons = sequelize.define('weapon', {
    name : Sequelize.STRING,
    owner : Sequelize.STRING,
});

module.exports = {
    sequelize, 
    User, 
    Weapons
};
