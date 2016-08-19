var express = require('express'),
    app = express(),
    ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || '8000';

app.use('/', express.static('app'));

app.listen(port, ip, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("JetScope website server started IP: " + ip + " PORT: " + port);
  }
});

