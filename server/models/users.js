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
	}
});

const postSchema = mongoose.Schema({
	post:{
		type:String,
	},
	likes:{
		type:Number,
		default:1
	},
	comments:{
		type:[String],
		default:['no comments']
	},
	id:String
})

const bookStatusSchema = mongoose.Schema({
	status:{
		type:Number
	},
	rating:{
		type:Number
	},
	id:String
})

const user = mongoose.model('user', userSchema);
const posts = mongoose.model('posts', postSchema);
const bookStatus = mongoose.model('bookStatus', bookStatusSchema);

export {user,posts,bookStatus}

