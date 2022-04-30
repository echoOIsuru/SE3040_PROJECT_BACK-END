const express = require('express');
var router = express.Router();
const testSchema = require('../Models/TestModel')
const mongo = require('../mongo');


router.get('/', async (req, res) => {
        await mongo().then(async (mongoose) =>{
            try{
                console.log('Connected to mongoDBTestPost!')
    
                const test = {
                    name: "TEST_DATA2",
                    password: "123asd"
                }
    
                await new testSchema(test).save()
    
            }finally{
                mongoose.connection.close()
            }
        })


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
})


module.exports = router;