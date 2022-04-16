const express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE');
    res.end();
})


module.exports = router;