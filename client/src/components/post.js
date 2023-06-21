import postCSS from '../styles/post.module.css';
import {useState, useRef, useEffect} from 'react';


const Post = () => {

	const [post, setPost] = useState('');
	const [allPost, setallPost] = useState([]);
	const textareaRef = useRef(null);
	const [like, setLike] = useState(0);
	const [comment, setComment] = useState([]);

	const [style, setStyle] = useState('none');

	const id = localStorage.userUniqueId;
	const [isLoading, setIsLoading] = useState(true);


	function handleChange(e){
		setPost(e.target.value);

	}

	function handleClick(){
		setLike(like+1);
	}

	function handleComment(e){
		if(e.key === 'Enter'){
			console.log(e.currentTarget)
			e.currentTarget.value = ''
			setStyle('none')
		}
	}

	function handleCommentButton(e){
/*		if(e.key === 'Enter'){
			console.log(e.currentTarget.value)
			e.currentTarget.value = ''
		}*/
		console.log(e)
		setStyle('')
	}

	/*	API CALL WHEN SUBMITTING A POST	*/
	async function submit(){
		if(post !== ''){

			const response = await fetch('http://localhost:4000/home', {
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					id,
					post,
					
				})
			});
			const data = await response.json();

			// console.log(data)
			setallPost(data);
			setPost('');
			textareaRef.current.value = '';
		}
	}

		/*	API CALL TO FETCH DATA CONTINUOUSLY	*/
		useEffect(() => {
			async function fetchData(){
				const response = await fetch('http://localhost:4000/home');
				const data = await response.json();
				setallPost(data);
				
				console.log(data)
				/*jaan booch k lagaya gya timeout cool lagne k liye*/
				setTimeout(() => {setIsLoading(false)},1500)
			}
			fetchData();
		},[])
	
return (
	<div className={postCSS.mainDiv}>
		<div className={postCSS.textarea}>

			<textarea placeholder='Add a post:' 
						id={postCSS.textarea} 
						rows='2' cols='10' 
						onChange={handleChange} 
						ref={textareaRef} 
					/>

			<button id={postCSS.button} onClick={submit}>post</button>
		</div>

		<div className={postCSS.updates}>
			{ isLoading ? (<p>Loading wait...</p>) : 
				(allPost.map((element, key) => {
					if(element.flag === 0) {
						return (
							<div className={postCSS.post} key={key}>
								<p>{element.post}</p>
								<div className={postCSS.likeandcomment}>
									<p>{like}</p>
									<button className={postCSS.like} onClick={handleClick}>like</button>
									<button className={postCSS.comment} onClick={handleCommentButton}>comment</button>
								</div>
								<textarea 
									id={postCSS.comments} 
									placeholder='comment...' 
									onKeyDown={handleComment}
									style={{display:style}}></textarea>
							</div>)
					}
					else if(element.flag === 1){
						if(element.status === 1){
							return (
								<div className={postCSS.post} key={key}>
									<p>{element.postBy}</p>
									<p>is reading</p>
									<p>{element.bookTitle}</p>
									<p>by</p>
									<p>{element.authorName}</p>
								</div>
							)
						}
						else if(element.status === 2){
							return (
								<div className={postCSS.post} key={key}>
									<p>{element.postBy}</p>
									<p>has read</p>
									<p>{element.bookTitle}</p>
									<p>by</p>
									<p>{element.authorName}</p>
									<br/>
									<p>Rated it: {element.rating} stars</p>
								</div>
							)
						}
						else if(element.status === 3){
							return (
								<div className={postCSS.post} key={key}>
									<p>{element.postBy}</p>
									<p>wants to read</p>
									<p>{element.bookTitle}</p>
									<p>by</p>
									<p>{element.authorName}</p>
								</div>
							)
						}
					}
				}
			))}
		</div>
	</div>
);
}


export default Post;