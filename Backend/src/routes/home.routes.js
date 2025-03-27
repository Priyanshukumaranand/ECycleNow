import { Router } from "express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory path (since we're using ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// API endpoint to send data to React
router.get('/api/homedata', (req, res) => {
  // Replace this with your actual data or database query
  const homeData = {
    title: "Welcome to ECycleNow",
    description: "Your one-stop solution for e-waste recycling",
    features: [
      "Easy drop-off locations",
      "Rewards for recycling",
      "Environmental impact tracking"
    ]
  };
  
  res.json(homeData);
});

// Serve static files from your React build folder
router.use(express.static(path.join(__dirname, '../../../Frontend/dist')));

// This catch-all route will send the React app's index.html for any route
// not handled by an API endpoint, allowing client-side routing to work
// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../../Frontend/dist', 'index.html'));
// });

export default router;