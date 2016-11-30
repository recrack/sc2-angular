angular.module('app', [])
  .controller('Main', function($scope) {
    var self = this;

    steemconnect.init({
      baseURL: 'https://dev.steemconnect.com',
      app: 'simple-app',
      callbackURL: 'https://bonustrack.github.io/tutorials/comments/'
    });

    $scope.parentAuthor = 'siol';
    $scope.parentPermlink = 'test-periscope';
    $scope.comments = {};
    $scope.isAuth = false;
    $scope.loginURL = steemconnect.getLoginURL();

    steemconnect.isAuthenticated(function(err, result) {
      if (!err && result.isAuthenticated) {
        $scope.isAuth = true;
        $scope.username = result.username;
        $scope.$apply();
      }
    });

    this.loadComments = function() {
      steem.api.getContentReplies($scope.parentAuthor, $scope.parentPermlink, function(err, result) {
        if (!err) {
          $scope.comments = result;
          $scope.$apply();
        }
      });
    };

    this.isAuth = function() {
      return $scope.isAuth;
    };

    this.getLoginURL = function() {
      return steemconnect.getLoginURL();
    };

    this.submit = function() {
      var permlink = 're-' + parentPermlink + '-' + Math.floor(Date.now() / 1000);
      steemconnect.comment(parentAuthor, parentPermlink, $scope.username, permlink, '', $scope.comment, '', function(err, result) {
        console.log(err, result);
        $scope.comment = '';
        $scope.$apply();
        self.loadComments();
      });
    };

  });