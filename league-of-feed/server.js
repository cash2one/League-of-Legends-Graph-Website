var express= require("express");
var app = express();
var PORT = 3000;
// Static Directory ===================================================
app.use(express.static("./public"));
// Routes =============================================================
require("./routes/index")(app);
// require("./routes/api-routes")(app);
require("./routes/data")(app);

// 
app.listen(PORT, function() {
    console.log(`Listening on PORT:`+ PORT);
});