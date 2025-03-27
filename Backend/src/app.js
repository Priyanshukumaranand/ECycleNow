import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true,limit:'16kb'}));
app.use(express.static("public"));
app.use(cookieParser());

//routes import 
import userRouter from './routes/user.routes.js';
import  homeRoutes from './routes/home.routes.js';
import aboutRoutes from './routes/about.routes.js';
import featuresRoutes from './routes/features.routes.js';


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

export { app };