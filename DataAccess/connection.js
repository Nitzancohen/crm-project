const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://sql7263191:CFitVpBiFP@sql7.freesqldatabase.com/sql7263191')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

module.exports = sequelize;