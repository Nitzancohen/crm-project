const Sequelize = require('sequelize')
const sequelize = require('./connection')

const Client = sequelize.define('client', {
    _id: { type: Sequelize.STRING, primaryKey: true },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    firstContact: { type: Sequelize.STRING },
    emailType: { type: Sequelize.STRING },
    sold: { type: Sequelize.BOOLEAN },
    owner: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING }
})

// Client.sync()

// const clients = require('../src/data.json')
// for (c of clients) {
//     Client.create({
//         _id: c._id,
//         name: c.name,
//         email: c.email,
//         firstContact: c.firstContact,
//         emailType: c.emailType,
//         sold: c.sold,
//         owner: c.owner,
//         country: c.country
//     })
// }

module.exports = Client;