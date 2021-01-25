const express = require('express');
const app = express();
const cors = require("cors");

app.set('port', process.env.PORT || 2000)
app.use(cors());
app.use(express.json());

app.use(require('./routes/data'))

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})