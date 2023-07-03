import postCSS from '../styles/post.module.css';
import {useState, useRef, useEffect} from 'react';
import profileImg from './pages/static/images/profile1.jpeg';

import trash from './static/trash.svg';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Avatar alt="Remy Sharp" src={profileImg} /> */}
	  <Avatar alt="Remy Sharp"  />
    </Stack>
  );
}

const Post = () => {

	const [post, setPost] = useState('');
	const [allPost, setallPost] = useState([]);
	const textareaRef = useRef(null);
	const [like, setLike] = useState(0);
	const [comment, setComment] = useState([]);

	const [style, setStyle] = useState('none');

	const id = localStorage.userUniqueId;
	const [flag, setFlag] = useState(null);

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

	function deleteFunction(e){
		setFlag(e);
		async function toDelete(){
			const response = await fetch(`http://localhost:4000/${id}/${flag}`, {
				method:'DELETE',
			});
			const data = await response.json();
			console.log(data);
		}
		toDelete();
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
				setallPost(data.reverse());
				
				/*jaan booch k lagaya gya timeout cool lagne k liye*/
				setTimeout(() => {setIsLoading(false)},1500)
				// console.log(data)
			}
			fetchData();
		})

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
								<div className={postCSS.imageAndName}>
									<ImageAvatars />
									<h2>{element.postBy}</h2>
									{element.id === id? <img src={trash} alt='delete' className={postCSS.trash} onClick={() => deleteFunction(element.flag)} /> : null}
								</div>
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
									<div className={postCSS.imageAndName}>
										<ImageAvatars />
										<h2>{element.postBy}</h2>
										{element.id === id? <img src={trash} alt='delete' className={postCSS.trash} onClick={() => deleteFunction(element.flag)} /> : null}
									</div>
									<p>is reading <b>{element.bookTitle}</b> by <i>{element.authorName}</i></p>
								</div>
							)
						}
						else if(element.status === 2){
							return (
								<div className={postCSS.post} key={key}>
									<div className={postCSS.imageAndName}>
										<ImageAvatars />
										<h2>{element.postBy}</h2>
										{element.id === id? <img src={trash} alt='delete' className={postCSS.trash} onClick={() => deleteFunction(element.flag)} /> : null}
									</div>
									<p>has read <b>{element.bookTitle}</b> by <i>{element.authorName}</i></p>
									<br/>
									<p><b>Rated it: </b>{element.rating} stars</p>
								</div>
							)
						}
						else if(element.status === 3){
							return (
								<div className={postCSS.post} key={key}>
									<div className={postCSS.imageAndName}>
										<ImageAvatars />
										<h2>{element.postBy}</h2>
										{element.id === id? <img src={trash} alt='delete' className={postCSS.trash} onClick={() => deleteFunction(element.flag)} /> : null}
									</div>
									<p>wants to read <b>{element.bookTitle}</b> by <i>{element.authorName}</i></p>
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