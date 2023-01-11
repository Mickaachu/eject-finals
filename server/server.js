const express = require('express');
const app = express();
const mysql = require('mysql2');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'ErinCapuchino23',
	database:'db_register'

});
con.query(
'select * from student',
function(err,results,fields) {
	console.log(results);
	
}

)
app.get("/", (req,res) => {
	
	res.send('Hello World!')
});



app.listen(5000, () => {
	console.log("server is running at port 5000")
})