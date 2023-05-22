import mongoose from 'mongoose';
import {user,posts} from './users.js';

mongoose.connect('mongodb://localhost/testdb')


/*	CREATING A USER	*/
export const userCreate = async function (creds){
	const newUser = await user.create(creds)
	console.log('user added');
	console.log(newUser);
}

/*	DELETING A USER	*/
export const userDelete = async function (){
	await user.deleteMany({
		name:'rohan'
	})
	console.log(`user deleted!`);
}
// userDelete();

/*	FINDING A USER	*/
export const userFind = async function (userEmail){
	const usr = await user.find({
		email:userEmail
	})
	// console.log(usr);
	// console.log(userEmail);
	if(usr[0]){

		return [true, usr];
	}
	else{

		return [false];
	}
}
// userFind('admin@admin.com');

/*	FINDING ALL USERS	*/
export const userFindAll = async function (){
	const User = await user.find()
	// .populate('postData');
	console.log('scripts.js 47', User)
}
// userFindAll()


/*	ADDING	POST FOR THE USER	*/

export const userPost = async function (data){
	const post = await posts.create(data);
	// console.log('56',post)
}

/*	FINDING ALL POSTS	*/
export const findAllPosts = async function(){
	const post = await posts.find();
	return post;
}

/*	FINDING POST BY ID	*/
export const findPostById = async function (userId){
	const post = await posts.find({
		id:userId
	})
	// console.log('scripts line 63', post);
	return post;
}

// findPostById('646b2ca04efe516b78c02544')


/*	REMOVING POSTS	*/
export const removePosts = async function(){
	const post = await posts.deleteMany();
	console.log('all posts removed')
}

// removePosts()