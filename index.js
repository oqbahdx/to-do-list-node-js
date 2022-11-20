const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    var date = new Date();
    var currentDate = date.getDay();
    var newDay = "";

    switch (currentDate) {
        case 0:
            newDay = "sunday";
            break;
        case 1:
            newDay = "monday";
            break;
        case 2:
            newDay = "tuesday";
            break;
        case 3:
            newDay = "wednesday";
            break;
        case 4:
            newDay = "thursday";
            break;
        case 5:
            newDay = "friday";
            break;
        case 6:
            newDay = "saturday";
            break;
        default:
            console.log("out of range");
            break;
    }

    res.render("index", {
        day: newDay
    });

});


app.listen(3000, function () {
    console.log("server start on port 3000");
});