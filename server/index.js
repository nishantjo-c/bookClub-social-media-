import express from 'express';
import cors from 'cors';
import { 
		userCreate, 
		userDelete, 
		userFind, 
		createPost, 
		findAllPosts, 
		findPostById,
		findUserName,
		addBook
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
	console.log('chal rha h... line 50')
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
	createPost(data);
	console.log('index line 85', data)

	// findPostById(data.id)
	findAllPosts()
	.then((posts) => {
		// console.log(posts)
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

/*	 POPUP POST ROUTE	*/
app.post('/home/pop', (req,res) => {

	const statusAndRating = {
		status:req.body.status,
		rating:req.body.value,
		id:req.body.id
	}
	addBook(statusAndRating);
	res.send(statusAndRating);

})

/*	 PROFILE ROUTE	*/
app.get('/:id', async (req,res) => {

	// console.log(req.params.id)
		const val = req.params.id
		// console.log(val)
		const name = await findUserName(val)
		// console.log('line 124 index', name[0].name)
	res.send({name:name[0].name});
})

/*	SERVER IS LISTENING AT PORT 6000	*/
app.listen(4000, (req,res) => {
	console.log('running server')
})