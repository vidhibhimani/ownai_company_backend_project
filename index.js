    
const express = require ('express')
const connection = require('./config/db')
 
const user = require('./model/schema')
const { reg } = require('./controller/authentication')

const app = express();
const port = 8900;

 
app.use(express.json());

app.use('/', require('./routes/routes'))



app.listen(port, () => {
    console.log("server started at :-", port)

    connection();
})