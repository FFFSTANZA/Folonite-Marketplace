import express from 'express';
import componentRoutes from './routes/componentRoutes.js';
import templateRoutes from './routes/templateRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/components', componentRoutes);
app.use('/api/templates', templateRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred!', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
