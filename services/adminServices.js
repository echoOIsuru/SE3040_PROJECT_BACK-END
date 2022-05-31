const test1 = async(req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
}

const test2 = async(req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 2');
    res.end();
}
const test3 = async(req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
}

module.exports = {
    test1,
    test2,
    test3
}