var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var keys = require('./secretkeys');
var port = 3737;

app.use(express.static('../public'));
// TODO server front end files with static
app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({secret: keys.expressSecret}))

app.post("/api/screenname", function(req, res){
  // TODO Save screenname to session
  console.log('got screenname ' + req.body.name);
  req.session.screenname = req.body.name;
  // now we are storing our screenname onto our screen
  res.end();
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
