var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    res.status(200).send(chats);
  },
  postChats:function(req,res){
    // TODO write postChats
  var chatMessage = req.body;
  var sn = req.session.screenname;

  chatMessage.screenname = sn;

  chats.push(chatMessage);

  res.status(200).end();

  },
  deleteChats:function(req,res){
    // TODO write deleteChats
  }
}
