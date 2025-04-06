import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import session from "express-session";
import { User } from "./models/user.model.js";
import passport from "passport";

import dotenv from 'dotenv';
dotenv.config();



const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Google Strategy Configuration
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
            // Create new user if doesn't exist
            user = await User.create({
                username: profile.emails[0].value.split('@')[0],
                email: profile.emails[0].value,
                fullname: profile.displayName,
                avatar: profile.photos[0].value,
                refreshToken: accessToken
            });
        } else {
            // Update existing user's refresh token
            user.refreshToken = accessToken;
            await user.save();
        }

        return done(null, user);
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


app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true,limit:'16kb'}));
app.use(express.static("public"));
app.use(cookieParser(process.env.COOKIE_SECRET));

//routes import 
import userRouter from './routes/user.routes.js';
import  homeRoutes from './routes/home.routes.js';
import aboutRoutes from './routes/about.routes.js';
import featuresRoutes from './routes/features.routes.js';
import authRoutes from './routes/auth_routes.js';  // Add this new import
import session from "express-session";



//routes declaration
// Important: Handle API routes first before the static file handlers
app.use('/api/aboutdata', (req, res, next) => {
    // This ensures the API route is handled by the about routes
    req.url = '/api/aboutdata';
    aboutRoutes(req, res, next);
});

app.use('/api/homedata', (req, res, next) => {
    // This ensures the API route is handled by the home routes
    req.url = '/api/homedata';
    homeRoutes(req, res, next);
});

app.use('/api/featuresdata', (req, res, next) => {
    // This ensures the API route is handled by the features routes
    req.url = '/api/featuresdata';
    featuresRoutes(req, res, next);
});

//routes declaration
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/features', featuresRoutes);
app.use("/user",userRouter);

app.use("/api/auth", authRoutes); 

export { app };