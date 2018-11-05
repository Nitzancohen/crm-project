const Sequelize = require('sequelize')
const Op = Sequelize.Op;
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

router.get('/badges/newclients', function (req, res) {
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let date = year + '-' + month

    Client.count({
        where: {
            firstContact: { [Op.like]: `${date}%` }
        }
    }).then(newClientsCount => {
        res.send(`${newClientsCount}`)
    })
})

router.get('/badges/emails', function (req, res) {
    Client.count({
        where: {
            emailType: { [Op.not]: null }
        }
    }).then(emails => {
        res.send(`${emails}`)
    })
})

router.get('/badges/outstanding', function (req, res) {
    Client.count({
        where: {
            sold: false
        }
    }).then(sold => {
        res.send(`${sold}`)
    })
})

router.get('/badges/hottestCountry', function (req, res) {
    Client.count({
        attributes: ['country'],
        group: ['country'],
        where: {
            sold: true
        }
    }).then(salesPerCountry => {
        let hottest = '', maxSales = 0;
        for (country of salesPerCountry) {
            if (country.count > maxSales) {
                hottest = country.country;
                maxSales = country.count
            }
        }
        res.send(hottest)
    })
})

router.get('/charts/employees', function (req, res) {
    Client.count({
        attributes: ['owner',],
        group: ['owner'],
        where: {
            sold: true
        }
    }).then(employees => {
        let topThree = []
        let top = employees[0]
        while (topThree.length < 3) {
            for (let e of employees) {
                if (e.count > top.count) {
                    top = e
                }
            }
            topThree.push(top)
            console.log('index: '+employees.indexOf(top))
            employees.splice(employees.indexOf(top), 1)
            top = employees[0]
        }
        res.send(topThree)
    })
})

router.get('/charts/salesby/country', function (req, res) {
    Client.count({
        attributes: [['country', 'dataType']],
        group: ['country'],
        where: {
            sold: true
        }
    }).then(salesPerCountry => {
        res.send(salesPerCountry)
    })
})

router.get('/charts/salesby/email', function (req, res) {
    Client.count({
        attributes: [['emailType', 'dataType']],
        group: ['emailType'],
        where: {
            sold: true,
            emailType: { [Op.not]: null }
        }
    }).then(salesPerEmail => {
        res.send(salesPerEmail)
    })
})

router.get('/charts/salesby/month', function (req, res) {
    // Client.count({
    //     attributes: ['country'],
    //     group: ['country'],
    //     where: {
    //         sold: true
    //     }
    // }).then(salesPerCountry => {
    //     res.send(salesPerCountry)
    // })
    res.send()
})

router.get('/charts/salesby/owner', function (req, res) {
    Client.count({
        attributes: [['owner', 'dataType']],
        group: ['owner'],
        where: {
            sold: true
        }
    }).then(salesPerOwner => {
        res.send(salesPerOwner)
    })
})
module.exports = router;