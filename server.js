const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// Serve everything in the current directory (which will be populated by the deployment)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send('Lu\\'m Coffee Media CDN is running.');
});

app.listen(PORT, () => {
    console.log(`Media CDN listening on port ${PORT}`);
});
