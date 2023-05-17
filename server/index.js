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


	userFind(creds.email).then(value => {
		if(value[0]){
			// console.log(value[0])
			console.log(`${creds.email} alredy exist`)
			res.send({
					message:`Email ${creds.email} alredy exist.`
			})
		}
		else{
			userCreate(creds);
			console.log(`added ${creds.email}`)
			res.send(
				{
					message:`${creds.name} added. Email ${creds.email}`
				});
		}
	})
})

app.post('/login', (req,res) => {
	const creds = {
		email:req.body.email,
		password:req.body.password
	}
	userFind(creds.email).then(value => {
		if(value[0]){
			
			if((creds.email === value[1][0].email) && (creds.password === value[1][0].password)){
				console.log('user found')
				res.send(true)
			}
			else{
				console.log('wrong credentials')
				res.send(false)
			}
		}
		else{
			console.log("user doesn't exist, signup...")
		}
	})
})

app.listen(5000, (req,res) => {
	console.log('running server')
})