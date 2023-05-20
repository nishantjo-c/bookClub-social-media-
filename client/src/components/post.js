import postCSS from '../styles/post.module.css';
import {useState, useRef} from 'react';

const Post = () => {

	const [post, setPost] = useState('');
	const [allPost, setallPost] = useState([]);
	const textareaRef = useRef(null);

	function handleChange(e){
		setPost(e.target.value);

	}

	function submit(){
		if(post != ''){
			const updatesPost = [post, ...allPost]
			setallPost(updatesPost)
			console.log(updatesPost)
		}
		textareaRef.current.value = '';
	}

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
				{
					allPost.map((post, key) => {
						return (
							<div className={postCSS.post} key={key}>
								<p>{post}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}


export default Post;