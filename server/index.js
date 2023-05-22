import express from 'express';
import cors from 'cors';
import { 
		userCreate, 
		userDelete, 
		userFind, 
		userPost, 
		findAllPosts, 
		findPostById 
	} from './models/scripts.js';

const app = express();
app.use(express.json());
app.use(cors());

/*	REGISTER ROUTE	*/
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

/*	LOGIN ROUTE	*/
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


/*	POST ROUTE	*/
app.post('/home', (req,res) => {

	const data = {
		post:req.body.post,
		id:req.body.id
	}
	userPost(data);
	console.log('index line 77', data)

	// findPostById(data.id)
	findAllPosts()
	.then((posts) => {
		console.log(posts)
		res.send(posts);
	});
})


/*	GET ROUTE	*/
app.get('/home', (req,res) => {
	findAllPosts()
	.then((posts) => {
		// console.log(posts)
		res.send(posts);
	});
})


/*	SERVER IS LISTENING AT PORT 5000	*/
app.listen(5000, (req,res) => {
	console.log('running server')
})