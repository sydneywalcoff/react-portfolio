const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// const createAndSendEmail = require('./email');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/api', (req, res) => {
    console.log(req)
    // createAndSendEmail(req)
    console.log(res)
});

app.listen(PORT, ()=> {
    console.log(`server now on port ${PORT}`)
})

module.exports = app;
