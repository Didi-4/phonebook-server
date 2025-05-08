import express from 'express';
import contactRoutes from './routes/contactRoutes.js';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(bodyParser.json())
app.use('/api/contacts', contactRoutes)
console.log('Server initialized');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});