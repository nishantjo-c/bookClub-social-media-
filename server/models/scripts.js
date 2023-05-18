import mongoose from 'mongoose';
import user from './users.js';

mongoose.connect('mongodb://localhost/testdb')

export const userCreate = async function (creds){
	const newUser = await user.create(creds)
	console.log('user added');
	console.log(newUser);
}


export const userDelete = async function (){
	await user.deleteMany({
		name:''
	})
	console.log(`user deleted!`);
}
// userDelete();

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
// userFind('nj0402001@gmail.com');

export const userFindAll = async function (){
	const usr = await user.find();
	console.log(usr)
}

userFindAll()