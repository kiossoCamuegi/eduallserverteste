const GoogleSrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy =  require("passport-facebook").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID ="892848322668-c6cgcvrt17nphd9qptci98l82dilfmvn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET ="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"; 


const FACEBOOK_APP_ID = "000";
const FACEBOOK_APP_SECRET = "000";


passport.use(new GoogleSrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) { 
      return done(null,profile); 
  }
));

passport.serializeUser((user, done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})



passport.use(new FacebookStrategy({
    clientID:FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(request, accessToken, refreshToken, profile, done) { 
    return done(null,profile); 
  }
));