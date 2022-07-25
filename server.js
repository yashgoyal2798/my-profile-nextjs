// parse application/json
app.use(bodyParser.json())

// DATABASE configuration
var config = {
    userName: 'USERNAME',
    password: 'PASSWORD',
    server:   'SERVER',   
    options: {
        encrypt: true,
        database: 'DATABASE',
        rowCollectionOnRequestCompletion: true
    }
};
var connection = new Connection(config);


// Server that listens to port 80
var server = http.createServer();

var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Node Js app listening at http://%s:%s", host, port)

});



app.post('/postrequest', function (req, res) {
    // function 
});
