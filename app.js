const express = require('express');
const app = express();

app.use(require('./test'))

app.listen(8090, () => {
    console.log('Server running on port 8090..');
})