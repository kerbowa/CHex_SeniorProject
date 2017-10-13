(function () {

  angular
    .module('clientApp')
    .service('authentication', authentication);

  authentication.$inject = ['$http', '$window', '$localStorage'];
  function authentication ($http, $window, $localStorage) {

    var saveToken = function (token) {
      $localStorage.token = token;
    };

    var getToken = function () {
      return $localStorage.token;
    };

    var isLoggedIn = function() {
      var token = getToken();
      var payload;

      if(token){
        return true;
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    var currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          name : payload.username
        };
      }
    };

    login = function(user, callback) {
      var request = $http.post('/api/login', user);

      request.then(function (data) {
        console.log(data.data.token);
			  saveToken(data.data.token);
        callback();
      }).catch(function() {
        console.log("Was not able to login");
      });
    };

    logout = function(callback) {
      delete $localStorage.token;
      callback();
    };

    return {
      currentUser : currentUser,
      saveToken : saveToken,
      getToken : getToken,
      isLoggedIn : isLoggedIn,
      login : login,
      logout : logout
    };
  }


})();
