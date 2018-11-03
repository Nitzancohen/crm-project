const express = require('express');
const router = express.Router();
const Client = require('./DataAccess/ClientModel');

router.get('/clients', function (req, res) {
    Client.findAll({}).then(clients => {
        res.send(clients)
    })
});

router.put('/clients/:id', function (req, res) {
    let client = req.body.client
    let values = {
        name: client.name,
        country: client.country,
        owner: client.owner,
        emailType: client.emailType,
        sold: client.sold
    }
    let selector = {
        where: { _id: req.params.id }
    }
    Client.update(values, selector).then(function (data) {
        res.send(data)
    })
})

router.post('/clients', function (req, res) {
    let c = req.body.client
    Client.create({
        _id: c._id,
        name: c.name,
        email: c.email,
        firstContact: c.firstContact,
        emailType: c.emailType,
        sold: c.sold,
        owner: c.owner,
        country: c.country
    }).then(function (data) {
        res.send(data)
    })
})

module.exports = router;