const express = require('express');
const app = express();
const port = process.env.port || 3000;

const addresses = require('/Users/lorenzodalberto/Documents/Odin-Project/developer-test-api/src/routes/addresses.js');
const creditors = require('/Users/lorenzodalberto/Documents/Odin-Project/developer-test-api/src/routes/creditors.js');
const creditSearch = require('/Users/lorenzodalberto/Documents/Odin-Project/developer-test-api/src/routes/credit-search.js');

//Handle all incoeming request looking for json and 
//convert request into objects
app.use(express.json());

app.use("/addresses", addresses);
//use the address.js file to handle 
//endpoints that start with /addresses

app.use("/creditors", creditors);
//use the address.js file to handle 
//endpoints that start with /creditors


app.use("/credit-search", creditSearch);
//use the address.js file to handle 
//endpoints that start with /creditors


app.get("/", (req,res) => {
    //handle root
    res.send("hello root");
});



app
    .route("/creditors")
    .get( (req, res) => {})
    .post( (req, res) => {});

app.listen(port, err => {
    if(err){
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
})