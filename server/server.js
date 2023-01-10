const express = require('express');
const app = express();
// test only
app.get("/api", (req,res) => {
	res.json({"user":["Userone","Usertwo","Userthree"] });

})
app.listen(5000, () => {
	console.log("server is running at port 5000")
})