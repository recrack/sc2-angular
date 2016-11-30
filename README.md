# Tutorial: Build a simple app on Steem blockchain using Steem Connect

On this tutorial we will create a simple comment box for Steem blockchain post

## What we will use on this tutorial
We will make this simple Steem application using **AngularJS** 1, we will also use **Steem.js** to retrieve comment list and **Steem Connect JavaScript SDK** to enable authentification and for broadcast comment. Then Twitter Bootstrap to have a basic styling.

# Build your app step by step

## #1 Create a basic layout with Angular and Twitter Bootstrap

`index.html`
```html
<!doctype html>
<html ng-app="app">
<head>
  <title>Comments</title>
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css">
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
  <script src="steemconnect.min.js"></script>
  <script src="//cdn.steemjs.com/lib/latest/steem.min.js"></script>
  <script src="app.js"></script>
</head>

<body>

<div class="container my-2" ng-controller="Main as main" style="max-width: 600px;">
  <!-- Login box -->
  <div class="input-group input-group-lg mt-1">
    <div ng-show="main.isAuth()">
      <b>@{{username}}</b>
      <a class="btn btn-secondary" href="https://dev.steemconnect.com/logout">Log Out</a>
    </div>
    <a class="btn btn-primary" href="https://dev.steemconnect.com/authorize/@simple-app?redirect_url=https://bonustrack.github.io/tutorials/comments/" ng-hide="main.isAuth()">Log In</a>
  </div>

  <ul class="list-group my-1" ng-init="main.loadComments()">
    <li class="list-group-item" ng-repeat="comment in comments"><b>@{{comment.author}}:</b> {{comment.body}}</li>
  </ul>

  <form ng-show="main.isAuth()" ng-submit="main.submit()">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Write a comment here" ng-model="comment">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="submit">Submit</button>
      </span>
    </div>
  </form>

</div>

</body>
</html>
```

## #2 Get article details with Steem.js

## #3 Setup you app on Steem Connect

## #4 Enable login with Steem Connect JavaScript SDK

## #5 Enable commenting

## Final Code

Find it on GitHub: https://github.com/bonustrack/bonustrack.github.io/tree/master/tutorials/comments

## Test it

On your browser: 
See the demo here: https://bonustrack.github.io/tutorials/comments/

## Go further in

Enable vote on comment, retrieve nested comments, embed it into an iframe.

