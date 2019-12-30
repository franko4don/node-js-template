let express = require('express')
let routes = express.Router();

//Creating the Index Route
routes.get('/', (req, res)=>{
    res
        .status(200)
        .send(
            "<br/><center><h3>TCS 2019</h3> <p>The College Situation API Version 1.0</p></center>"
        );
})


//exporting Route
module.exports = routes;