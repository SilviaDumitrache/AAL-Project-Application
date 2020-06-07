var express = require('express');
var routes = express.Router();
var userController = require('./controller/user.controller');
var passport = require('passport');

routes.get('/', (Request, Response) => {
    return Response.send('this is the API');
});

routes.post('/login', userController.loginUser);

routes.get('/special', passport.authenticate('jwt', {session: false}), (Request, Response) => {
    return Response.json({msg: `Bun venit ${req.user.email}!`  });
})

module.exports = routes;