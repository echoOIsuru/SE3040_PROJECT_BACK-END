exports.test1 = async(req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
}

exports.test2 = async(req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 2');
    res.end();
}