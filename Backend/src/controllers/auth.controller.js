import { User } from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

const googleCallback = async (req, res) => {
    const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
    
    try {
        // Add debugging
        console.log('Google user data:', req.user);

        if (!req.user || !req.user._id) {
            console.error('Invalid user data received from Google');
            return res.redirect(`${CLIENT_URL}/login?error=invalid_user_data`);
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.redirect(`${CLIENT_URL}/login?error=user_not_found`);
        }

        // Generate tokens
        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        // Update user's refresh token in database
        user.refreshToken = refreshToken;
        await user.save();

        // Set tokens in cookies
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 60 * 1000 // 15 minutes
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // Redirect to frontend with auth status
        res.redirect(`${CLIENT_URL}?auth=success&user=${encodeURIComponent(JSON.stringify({
            id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar
        }))}`);
    } catch (error) {
        console.error("Google callback error:", error);
        res.redirect(`${CLIENT_URL}/login?error=auth_failed`);
    }
};

export { googleCallback };