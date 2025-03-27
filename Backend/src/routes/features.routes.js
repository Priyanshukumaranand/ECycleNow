import { Router } from "express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

// Get current directory path (since we're using ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// API endpoint to send features data to React
router.get('/api/featuresdata', (req, res) => {
  // Replace this with your actual data or database query
  const featuresData = {
    title: "Our Features",
    subtitle: "Making e-waste recycling accessible and rewarding",
    mainFeatures: [
      {
        id: 1,
        title: "Convenient Drop-off Locations",
        description: "Find the nearest e-waste collection points with our interactive map. We've partnered with retailers, community centers, and recycling facilities across the country.",
        icon: "map-marker" // You can use this with your icon system in the frontend
      },
      {
        id: 2,
        title: "Reward Points System",
        description: "Earn points for every item you recycle. Redeem them for discounts at partner stores, donations to environmental causes, or convert to cash credits.",
        icon: "gift"
      },
      {
        id: 3,
        title: "Environmental Impact Tracking",
        description: "See the real difference you're making with personalized impact metrics. Track reduced carbon footprint, materials recovered, and resources saved.",
        icon: "chart-line"
      },
      {
        id: 4,
        title: "Business Solutions",
        description: "Custom recycling programs for businesses of all sizes. Comply with regulations, meet sustainability goals, and enhance your corporate responsibility profile.",
        icon: "building"
      }
    ],
    additionalFeatures: [
      "Educational resources about e-waste",
      "Community recycling events",
      "Secure data destruction certification",
      "Custom recycling collection for large items",
      "Regular recycling reminders and tips"
    ],
    stats: {
      locationsCount: 250,
      itemsRecycled: "100,000+",
      pointsAwarded: "5 million",
      co2Reduced: "1,500 tons"
    }
  };
  
  res.json(featuresData);
});

// Check if dist directory exists before trying to serve static files
const distPath = path.join(__dirname, '../../../Frontend/dist');
const indexPath = path.join(distPath, 'index.html');

// Only serve static files if the dist directory exists
if (fs.existsSync(distPath)) {
  router.use(express.static(distPath));
  
  router.get('*', (req, res) => {
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Build the frontend app first by running "npm run build" in the Frontend directory');
    }
  });
} else {
  router.get('*', (req, res) => {
    res.status(404).send('Build the frontend app first by running "npm run build" in the Frontend directory');
  });
}

export default router;