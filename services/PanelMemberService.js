const https = require('https');

exports.topicDownload = async(req, res) =>{
    const url = "https://scholar.harvard.edu/files/tnkomo/files/analysis_of_toyota.pdf"
    https.get(url, (fileStream) => {
        fileStream.pipe(res)
    })

}

exports.markingDownload = async(req, res) =>{
    const url = "https://scholar.harvard.edu/files/tnkomo/files/analysis_of_toyota.pdf"
    https.get(url, (fileStream) => {
        fileStream.pipe(res)
    })

}