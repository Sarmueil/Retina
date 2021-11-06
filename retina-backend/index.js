const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Database connected')
}).catch((err)=>{
  console.log(err)
});

const app = express()
const PinRoutes = require('./routes/pins');
const UserRoutes = require('./routes/user');

app.use(express.json())


app.use('/api/pins', PinRoutes)
app.use('/api/user', UserRoutes)

const PORT = process.env.PORT
app.listen(PORT, ()=>{ 
    console.log(`server listening on ${PORT}`)
})