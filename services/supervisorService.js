const https = require('https');

exports.test1 = async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
}

exports.test2 = async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 2');
    res.end();
}

exports.downloadsMarking = async (req, res) => {
    const url = "https://scholar.harvard.edu/files/tnkomo/files/analysis_of_toyota.pdf"
    https.get(url, (fileStream) => {
        fileStream.pipe(res)
    })

}