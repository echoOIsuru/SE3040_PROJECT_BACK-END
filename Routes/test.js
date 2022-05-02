const express = require('express');
var router = express.Router();
const Test = require('../models/TestModel')
const mongo = require('../mongo');


router.get('/', async (req, res) => {


    const test = {
        name: "TEST_DATA2",
        password: "123asd"
    }

    await new Test(test).save()


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
})


module.exports = router;