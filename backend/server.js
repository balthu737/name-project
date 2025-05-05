require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API escuchando en http://localhost:${port}/api`));
