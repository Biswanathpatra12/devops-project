var express = require('express')
var app = express()

var port = process.env.PORT || 5000

app.get('/', function(req, res) {
  res.send('🚀 DevOps App Running')
})

app.listen(port, '0.0.0.0', function() {
  console.log("Server running on port " + port)
})
