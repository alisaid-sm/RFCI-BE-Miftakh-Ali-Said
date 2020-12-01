const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());


app.post('/', function(req, res){
	var obj = {};
    console.log(req.body);
    console.log(req.headers);
	res.status(201).send(req.body);
});


app.listen(3000, () => {
    console.log(`server running on port 3000`);
});