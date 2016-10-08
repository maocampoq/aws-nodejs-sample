var port = process.env.PORT || 3001,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');
	var url = require('url');
var helper = require('./helper.js');
var log = function(entry) {
    console.log(new Date().toISOString() + ' - ' + entry);
};
	
var server = http.createServer(function (req, res) {
	log('Got request for '+req.url);
		 var inputUrl = url.parse(req.url, true);
		 if(inputUrl.pathname == '/' || inputUrl.pathname == '/index.html' ){
			res.writeHead(200);
			res.write(html);
			res.end();
		 }
		 if(inputUrl.pathname == '/api/parsetime'){
			 res.writeHead(200, { 'Content-Type': 'application/json' })
			 return res.end(helper.getTimeJson(inputUrl.query.iso));
		 }
		 else if(inputUrl.pathname == '/api/unixtime'){
			 res.writeHead(200, { 'Content-Type': 'application/json' })
			 return res.end(helper.getUnixTime(inputUrl.query.iso));
		 }else{			 
			res.writeHead(404, { 'Content-Type': 'application/json' })
			return res.end('Not Found')
		 }	   
     });	

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
log('Server running at http://127.0.0.1:' + port + '/');
