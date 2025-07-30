import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fileURLToPath  from 'url';

// Initialize dotenv
dotenv.config();

// Validate required environment variables
const requiredEnvVars = [
  'PORT',
  'CORS_ORIGIN'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Initialize configuration after validation
const app = express();
const { PORT, CORS_ORIGIN, } = process.env;

app.use(cors({
  origin: CORS_ORIGIN
}));
app.use(express.json());

// Simple health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Main api
app.post('/api/marco', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text input is required.' });
    }

    if (text.toLowerCase().trim() === 'marco')
    {
       return res.status(200).json({ marco: 'Polo' });
    }
    if (text.toLowerCase().trim() === 'polo')
    {
      return res.status(200).json({ marco: 'Marco' });
    }

    return res.status(200).json({ marco: 'zzzzzz' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
