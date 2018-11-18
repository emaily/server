const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('./config/keys');
const app = express();

console.log('the server is running...');

passport.use(new googleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
}));

app.get('/auth/google/callback', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
