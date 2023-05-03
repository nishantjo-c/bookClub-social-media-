import express from 'express';
import cors from 'cors';
import { userCreate, userDelete, userFind } from './models/scripts.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req,res) => {
	const creds = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}
	res.send(
		{
			message:`${creds.name} added. Email ${creds.email}`
		});
	// userCreate(creds);
})

app.post('/login', (req,res) => {
	console.log(req.body);
})

app.listen(8000, (req,res) => {
	console.log('running server')
})