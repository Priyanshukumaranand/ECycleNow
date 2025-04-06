import { Router } from "express";
import passport from "passport";
import { googleCallback } from "../controllers/auth.controller.js";

const router = Router();
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { 
        failureRedirect: `${CLIENT_URL}/login?error=auth_failed` 
    }),
    googleCallback
);

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Logout error:', err);
            return res.redirect(`${CLIENT_URL}/login?error=logout_failed`);
        }
        res.redirect(CLIENT_URL);
    });
});

router.get('/check', (req, res) => {
    res.json({
        isAuthenticated: req.isAuthenticated(),
        user: req.user || null
    });
});

export default router;