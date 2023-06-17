import postCSS from '../styles/post.module.css';
import {useState, useRef, useEffect} from 'react';


const Post = () => {

	const [post, setPost] = useState('');
	const [allPost, setallPost] = useState([]);
	const textareaRef = useRef(null);
	const [like, setLike] = useState(0);


	const id = localStorage.userUniqueId;
	const [isLoading, setIsLoading] = useState(true);


	function handleChange(e){
		setPost(e.target.value);

	}

	function handleClick(){
		setLike(like+1);
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
				
				/*data.map((element, key) => {
					if(element.flag === 1){
						console.log(element)
					}
				})*/

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
									<button className={postCSS.comment}>comment</button>
								</div>
							</div>)
					}
					else if(element.flag === 1){
						return (
							<div className={postCSS.post} key={key}>
								<p>{element.bookTitle}</p>
								<p>{element.authorName}</p>
							</div>
						)
					}
				}
			))}
		</div>
	</div>
);
}


export default Post;