const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
});

/* Error Handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'massage': err.message});

    return;
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});