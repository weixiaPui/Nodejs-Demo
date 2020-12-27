const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const config = {...process.env};
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

logger.info('Set up route');
require('./routes/index')(app);

// Add static file serving from public folder
app.use(express.static(path.join(__dirname, 'static')))

app.listen(config.PORT || 3000, () => logger.info('Started application at port 3000'));
