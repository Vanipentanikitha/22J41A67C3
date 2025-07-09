const express = require('express');
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', urlRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});