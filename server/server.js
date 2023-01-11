const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'ErinCapuchino23',
	database:'db_register'

});

app.post('/register', (req,res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const contactNumber = req.body.contactNumber;
	const address = req.body.address;
	const oldStudent = req.body.oldStudent;
	const reason = req.body.reason;
	console.log(firstName);
	
	con.query(
		'INSERT INTO student (firstName, lastName, email, contactNumber,address, oldStudent, reason) VALUES (?,?,?,?,?,?,?) ',
		[firstName,lastName,email,contactNumber,address,oldStudent,reason],
		(err, result) => {
			console.log(err)
			console.log(result)
		})

})
app.get("/", (req,res) => {
	
	res.send('Hello World!')
});



app.listen(5000, () => {
	console.log("server is running at port 5000")
})