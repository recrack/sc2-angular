var parentAuthor = 'siol';
var parentPermlink = 'test-periscope';

angular.module('app', [])
  .controller('Main', function($scope) {
    var self = this;

    $scope.comments = {};
    $scope.isAuth = false;

    steemconnect.setBaseUrl('https://dev.steemconnect.com');
    steemconnect.setApp('simple-app');
    steemconnect.isAuthenticated(function(err, result) {
      if (!err && result.isAuthenticated) {
        $scope.isAuth = true;
        $scope.username = result.username;
        $scope.$apply();
      }
    });

    this.loadComments = function() {
      steem.api.getContentReplies(parentAuthor, parentPermlink, function(err, result) {
        if (!err) {
          $scope.comments = result;
          $scope.$apply();
        }
      });
    };

    this.isAuth = function() {
      return $scope.isAuth;
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