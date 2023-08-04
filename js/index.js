const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

function onRequest(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/' || req.url == '/index.html') {
        fs.readFile('../index.html', null, (err, htmlFile) => {
            if (err) {
                fs.readFile('../pages/404.html', err404 => {
                    res.write(err404);
                });
            }
            else {
                res.write(htmlFile);
            }
            res.end();
        });
    }

    if (req.url == '/' || req.url == '/pages/about.html') {
        fs.readFile('../pages/about.html', null, (err, htmlFile) => {
            if (err) {
                fs.readFile('../pages/404.html', err404 => {
                    res.write(err404);
                });
            }
            else {
                res.write(htmlFile);
            }
            res.end();
        });
    }

    if (req.url == '/' || req.url == '/pages/contact-me.html') {
        fs.readFile('../pages/contact-me.html', null, (err, htmlFile) => {
            if (err) {
                fs.readFile('../pages/404.html', err404 => {
                    res.write(err404);
                });
            }
            else {
                res.write(htmlFile);
            }
            res.end();
        });
    }
}


http.createServer(onRequest).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
