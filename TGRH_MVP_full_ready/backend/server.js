require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes');
const { sequelize } = require('./src/models');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api', routes);
app.get('/', (req,res)=> res.send('TGRH backend is running'));
const PORT = process.env.PORT || 4000;
sequelize.authenticate().then(()=> console.log('DB connected')).catch(e=>console.error('DB failed',e));
app.listen(PORT, ()=> console.log(`TGRH API listening on ${PORT}`));
