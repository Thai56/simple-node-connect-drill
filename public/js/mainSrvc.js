angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http({
      url:'/api/chats',
      method:"GET"
    })
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
  }

  this.setScreenname = function(screenname){
    return $http({
      url:'/api/screenname',
      method:'POST',
      data: {name: screenname}
    })
  }

  this.addChats = function(chat){
    return $http({
      url:'/api/chats',
      method:'POST',
      data: {
        message: chat
      }
    }).then(function(response){
      if(response.status === 200){
        return response.data;
      }
    })
  }

});
