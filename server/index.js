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
			console.log(value[0])
		if(value[0]){
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
					status:'ok',
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

				const objectId = value[1][0]._id;
				console.log(`user found ${objectId}`)
				res.send({validation:true, objectId})
			}
			else{
				console.log('wrong credentials')
				res.send({validation:false})
			}
		}
		else{
			console.log("user doesn't exist, signup...")
			res.send({validation:false})
		}
	})
})

app.listen(5001, (req,res) => {
	console.log('running server')
})