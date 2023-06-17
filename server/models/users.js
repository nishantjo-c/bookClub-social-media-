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
	flag:{
		type:Number,
		default:0
	},
	// date: Date,
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
	flag:{
		type:Number,
		default:1
	},
	bookTitle:{
		type:String
	},
	authorName:{
		type:String
	},
	status:{
		type:Number
	},
	rating:{
		type:Number
	},
	postBy:{
		type:String
	},
	id:String
})

const user = mongoose.model('user', userSchema);
const posts = mongoose.model('posts', postSchema);
const bookStatus = mongoose.model('bookStatus', bookStatusSchema);

export {user,posts,bookStatus}

