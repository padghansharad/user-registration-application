let express = require('express')
let http = require('http');
var cors = require('cors')
var bodyPaser = require('body-parser')
let app = express();
let server = http.Server(app);
app.use(bodyPaser.json())
app.use(cors())
app.use(express.static('./dist'));
var fs = require('fs')
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'mydb',
    password: 'Password@123',
    schema: 'myschema',
    port: 5432,
})

eval(fs.readFileSync('./api/User/UserApi.js') + '');

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.error(`Server started on port: ${port}`);

    try {
        client.connect(function (err, res) {
            if (err) {
                console.log("Connection failed to Cloud Postgres Database", err);
            } else {
                console.log("Connection Successfull to Cloud Postgres Database");
            }
        })
    }
    catch (err) {
        console.log(err);
    }

});


process.on('uncaughtException', function (error) {
    console.log('\x1b[31m', 'fatal error', error, '\x1b[0m');
});
