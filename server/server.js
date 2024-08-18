import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
const directory = path.join(__dirname, '/uploads');
app.use('/uploads', express.static(directory));

mongoose.connect('mongodb://localhost:27017/realestateDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api', propertyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
