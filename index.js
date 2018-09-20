const IS_DEV = true;

const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const options = {
    target: 'http://localhost:8080/',
    changeOrigin: true
}

if(IS_DEV) {
    console.log('Running from build')
    app.use('/vue', proxy(options));
} else {
    console.log('Running from build')
    app.use('/vue', express.static('build'))
}

app.get('/', (req, res) => {
    res.redirect('/vue')
});

app.get('/api', (req, res) => {
    res.end("ok");
});

app.listen(3000);