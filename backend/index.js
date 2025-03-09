const express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express()
const port = 5000

const cors = require("cors");
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello! b')
})

const signupRoute = require('./routes/signup'); 
const loginRoute = require('./routes/login');
const adminRoute = require('./routes/admin');

const userRoute = require('./routes/user');


app.use(bodyParser.json());

//MONGODB CONNECTION
const mongoose = require('mongoose');
const dbURI = process.env.DB_URL;

mongoose.connect(dbURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = mongoose;

app.use('/auth', signupRoute);
app.use('/auth', loginRoute);
app.use('/admin', adminRoute);

app.use('/user', userRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})