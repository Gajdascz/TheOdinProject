import express from 'express';
import path from 'node:path';
const __dirname = import.meta.dirname;

const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './about.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './contact.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './404.html'));
});

app.listen(PORT, () => console.log(`Express App running on Port: ${PORT}`));
