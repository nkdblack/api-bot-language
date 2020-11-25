const express = require('express');
const app = express();

require('./start/routes')(app);
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server launched on port ${port}`);
});
