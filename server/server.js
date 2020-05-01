const express = require('express');

const logger = require('./utilities/logger');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 300;

app.use(routes);

app.listen(PORT, () => {
    logger.log(`Server is running on http://localhost:${PORT}`);
});
