let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Awesome project is coming soon!');
});

let port = 3000;
app.listen(port, function () {
    console.log('Running server on port ' + port);
});