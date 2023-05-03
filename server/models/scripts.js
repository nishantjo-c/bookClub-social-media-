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
		name:'admin'
	})
	console.log(`user deleted!`);
}
// userDelete();

export const userFind = async function (){
	const usr = await user.find({
		name:''
	})
	console.log(usr)
}
// userFind();