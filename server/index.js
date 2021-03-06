const
    express = require("express"),
    app = express(),
    fs = require('fs'),
    bodyParser = require("body-parser"),
    jsonParser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({extended: false}),
    cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/main.js', (request, response) => {
    fs.readFile('./static/main.js', (error, page) => {
        response.write(page);
        response.end();
    });
});

app.get('/', (request, response) => {
    fs.readFile('./static/index.html', (error, page) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(page);
        response.end();
    });
});

app.get('/auth', (request, response) => {
    fs.readFile('./static/index.html', (error, page) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(page);
        response.end();
    });
});

app.get('/add-transaction', (request, response) => {
    fs.readFile('./static/index.html', (error, page) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(page);
        response.end();
    });
});

app.get('/list-of-transactions', (request, response) => {
    response.json([
        {id:1, amount: 100, bankId: 1},
        {id:2, amount: 200, bankId: 2}
    ]);
    response.end();
});

app.get('/list-of-banks', (request, response) => {
    //Массив должен быть отсортирован по id по возрастанию
    const map = new Map();

    response.json([
        [1, 'Bank 1'],
        [2, 'Bank 2'],
        [3, 'Bank 3'],
        [4, 'Bank 4'],
        [5, 'Bank 5'],
        [6, 'Bank 6'],
        [7, 'Bank 7'],
        [8, 'Bank 8'],
        [9, 'Bank 9'],
        [10, 'Bank 10'],
    ]);
    response.end();
});

app.get('/previous-session-auth', (request, response) => {
    if (request.cookies.token && request.cookies.token === 'token') {
        fs.readFile('server/store.json', (error, page) => {
            try {
                response.json({
                  ok: true,
                  store: JSON.parse(page),
                });
            }
            catch (e) {
                response.json({
                    ok: false,
                    message: e
                });
            }

            response.end();
        });

    } else {
        response.json({
            ok: false
        });
        response.end();
    }
});

app.post('/get-token', urlencodedParser, (request, response) => {
    response.cookie('token', 'token', {expire: 360000 + Date.now()});
    response.json({
        ok: true
    });
});

let transactionId = 3;

app.post('/add-new-transaction', urlencodedParser, (request, response) => {
    response.json({
        ok: true,
        id: transactionId
    });

    transactionId++;
});

app.post('/save-store', jsonParser, (request, response) => {
    fs.writeFile('server/store.json', JSON.stringify(request.body));
    response.json({
      ok: true,
      id: request.query.id,
    });
});

app.get('/remove-transaction', (request, response) => {
    console.log();
    response.json({
        ok: true,
        id: request.query.id,
    });

    transactionId++;
});

app.get('/main.css', (request, response) => {
    fs.readFile('./static/main.css', (error, page) => {
        response.write(page);
        response.end();
    });
});

app.listen(3001);
