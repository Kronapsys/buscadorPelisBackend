const express = require('express');
const app = express();
const port = 3000;

// Server up
app.listen(port, () => console.log(`Listening at ${port}`));