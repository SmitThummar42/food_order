const express = require('express');
const app = express()
const port = 5000
const mongoDB = require("./db")
const cors = require('cors')
mongoDB();
app.use((req,res,next)=>{
  res.setheader=("Accees-Control-Allow-Origin","https://localhost:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
    next();

})
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


