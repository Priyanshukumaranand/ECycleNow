import passport from "passport";
import { User } from "../models/user.model";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    try {
        // Log profile data for debugging
        console.log('Google profile:', profile);
        
        const existingUser = await User.findOne({ email: profile.emails[0].value });
        
        if (existingUser) {
            return done(null, existingUser);
        }

        // If user doesn't exist, create new user
        const newUser = await User.create({
            username: profile.emails[0].value.split('@')[0],
            email: profile.emails[0].value,
            fullname: profile.displayName,
            avatar: profile.photos[0].value,
            refreshToken: accessToken
        });

        return done(null, newUser);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;