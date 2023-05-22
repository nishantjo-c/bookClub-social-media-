import postCSS from '../styles/post.module.css';
import {useState, useRef, useEffect} from 'react';

const Post = () => {

	const [post, setPost] = useState('');
	const [allPost, setallPost] = useState([]);
	const textareaRef = useRef(null);
	const [count, setCount] = useState(0);


	const id = localStorage.userUniqueId;
	const [isLoading, setIsLoading] = useState(true);

	function handleChange(e){
		setPost(e.target.value);

	}

	function handleClick(){
		setCount(count+1);
	}

		/*	API CALL WHEN SUBMITTING A POST	*/
		async function submit(){
			const response = await fetch('http://localhost:5000/home', {
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
			setallPost(data)
		}

		/*	API CALL TO FETCH DATA CONTINUOUSLY	*/
		useEffect(() => {
			async function fetchData(){
				const response = await fetch('http://localhost:5000/home');
				const data = await response.json();
				setallPost(data);
				console.log(data)
				/*jaan booch k lagaya gya timeout cool lagne k liye*/
				setTimeout(() => {setIsLoading(false)},1500)
			}
			fetchData();
		},[])
	
	/*if(post != ''){
			const updatesPost = [post, ...allPost]
			setallPost(updatesPost)
			// console.log(updatesPost)
			setPost('');
		}
		textareaRef.current.value = '';*/


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
							return (
								<div className={postCSS.post} key={key}>
									<p>{element.post}</p>
									<div className={postCSS.likeandcomment}>
										<p>{count}</p>
										<button className={postCSS.like} onClick={handleClick}>like</button>
										<button className={postCSS.comment}>comment</button>
									</div>
								</div>
							)
						}))
				}
			</div>
		</div>
	);
}


export default Post;