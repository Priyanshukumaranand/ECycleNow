import { Router } from "express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory path (since we're using ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// API endpoint to send data to React - moved to top to ensure it's matched first
router.get('/api/aboutdata', (req, res) => {
  // Replace this with your actual data or database query
  const aboutData = {
    title: "About ECycleNow",
    mission: "Reducing e-waste through sustainable recycling solutions",
    description: "ECycleNow is dedicated to addressing the growing problem of electronic waste. Our platform connects individuals and businesses with certified e-waste recyclers, making the recycling process simple, efficient, and rewarding.",
    team: [
      {
        name: "Alex Johnson",
        role: "Founder & CEO",
        bio: "Environmental scientist with 10+ years of experience in waste management"
      },
      {
        name: "Maria Garcia",
        role: "Chief Technology Officer",
        bio: "Software engineer passionate about using technology to solve environmental challenges"
      },
      {
        name: "David Lee",
        role: "Operations Director",
        bio: "Expert in supply chain management and sustainable logistics"
      }
    ],
    stats: {
      yearFounded: 2022,
      wasteRecycled: "50+ tons",
      partnersCount: 25,
      usersCount: 1500
    }
  };
  
  res.json(aboutData);
});

// Static files and catch-all route should come after API routes
router.use(express.static(path.join(__dirname, '../../../Frontend/dist')));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../Frontend/dist', 'index.html'));
});

export default router;