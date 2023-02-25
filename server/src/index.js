const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

const PORT = process.env.PORT || 3030;
const URL = process.env.URL || 'http://localhost:'

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'public')});
})

app.listen(PORT, () => {
    console.log(`\nServer is running on ${URL}${PORT} - this no longer consumes souls\n`);
});

module.exports = app;