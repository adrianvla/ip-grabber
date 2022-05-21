const http = require('http');
const {
    createCanvas
} = require('canvas')

const canvas = createCanvas(1, 1)
const context = canvas.getContext('2d');
const path = require('path');
var requestIp = require('request-ip');
var pixelGifStringB64 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
const im = pixelGifStringB64.split(",")[1];
const imgpix = Buffer.from(im, 'base64');

//https://3da6-31-165-14-216.ngrok.io

var server = http.createServer((req, res) => {
    var url = req.url.split('/');
    console.log(url);
    var clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
    if (url[1] == 'pixel') {

        if (url[2] == 'default') {
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': imgpix.length
            });
            var clientIp = requestIp.getClientIp(req);
            console.log(clientIp);
            res.end(imgpix);
        } else if (url[2] == 'set') {

            context.fillStyle = '#'+url[3];
            context.fillRect(0, 0, 1, 1);
            var img = canvas.toBuffer('image/png');
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': img.length
            });
            res.end(img);
        } else {
            
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('');
        }
    } else { 
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        //var dataurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAYAAAAiwE4nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFESURBVEhLxZYBksIgDEUhPcGezAN4/1O4hc0PfJam1BmV1jfzDTZtYgJI4+3+k4MS9TPGGB6/xYJ1XVXJbArZrudUffo9ZzwqZpONgVRbqLc3Nt6UklkE8JqFMGCsQfmDfDJUx8o/wSrsg49EpiUEpZk6H2a3ZJfHz8srDdeW6kJQJW1mqpFhsEiCaBsXCSJlYTyweNQHf5Pej2tUD6cBzzdVnz5ZhjXnjtKBvd8nGdFPy2aVzqZPxPH0hAg8SgQwPq3Co6SnVEj8GDqlwqOk4JKW9gj3CrUsS9szPfSzNZ4+BkX4DGRRe+fZtDKuSmotJTOSIsYzfbelMxIzzpE2Lb0Cq5CL/OikmIkgWdZzD6Oob1K+BV7Yn7DE78viw37Voyvpy9X6r6xnnPA8Gx2g7/E8SFs0I1jVTHZ/bZRndO11QvgDaQ3Y8w5hnvYAAAAASUVORK5CYII=';
        var dataurl = '/pixel/default';
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello</title>
            <meta property="og:image" content="${dataurl}">
            <meta name="description" content="Salut Mec" />
            <meta property="og:title" content="IP: ${clientIp}" />

            <link rel="icon" type="image/x-icon" href="${dataurl}">
        </head>
        <body>
            <img src="${dataurl}" alt="" srcset="">
        </body>
        </html>`);
    }
}).listen(80);


function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}