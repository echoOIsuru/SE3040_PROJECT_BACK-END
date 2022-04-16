const express = require('express');
const app = express();


// app.get('/', async (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World!');
//     res.end();
// })

app.use(require('./test'))

app.listen(8090, () => {
    console.log('Server running on port 8090..');
})