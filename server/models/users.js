import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name:{
		type:String,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
	},
	booksData:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'userData',
	}
});

const booksData = mongoose.Schema({
	status:{
		type:String
	},
	rating:{
		type:Number
	},
	review:{
		type:String
	}
})

const user = mongoose.model('user', userSchema);
const books = mongoose.model('booksData', booksData);
export {user,books}