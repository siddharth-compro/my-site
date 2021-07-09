const path = require('path');
var express    = require('express');        // call express
var app        = express();                 // define our app using express

var port = process.env.PORT || 5001;

app.get('/*', function(req,res) {  
     res.sendFile('index.html', {root: __dirname + '/'});
});

// START THE SERVER
app.listen(port);
console.log('listening on post: ' + port);