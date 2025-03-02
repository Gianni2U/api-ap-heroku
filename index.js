const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors());

app.get('/', cors(), (req, res) => res.send('This api works.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
