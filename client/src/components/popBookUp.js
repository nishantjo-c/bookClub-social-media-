import React from 'react'
import popBookUpCSS from '../styles/popBookUp.module.css';

import {SelectSmall, BasicRating} from './bookStatus';

const PopBookUp = ({isOpen, onClick, coverVal, bookTitle, authorName}) => {


	const [status, setStatus] = React.useState('');
	const [value, setValue] = React.useState(0);

	const id = localStorage.userUniqueId;

	/*  POST REQUEST FOR SENDING STATUS AND RATING DATA   */
	async function submit(){
		/*console.log(`status: ${status} value ${value}`)*/
	    
	    const response = await fetch('http://localhost:4000/home/pop',{
	      method:'POST',
	      headers:{
	        'Content-Type':'application/json'
	      },
	      body:JSON.stringify({
	        status,
	        value,
	        id,
	        bookTitle,
	        authorName
	      })
	    })
	    const data = await response.json();
	    console.log(data);

	  }

	  function handleClick(){
	  	submit();
	  	onClick();
	  }

	if(!isOpen){
		return null;
	}

return (
	<div className={popBookUpCSS.popUpParent}>

		<img src={coverVal} alt="no image yet!" />
			<div className={popBookUpCSS.information}>
				<h2 className={popBookUpCSS.titlePop}>{bookTitle}</h2>
				<p className={popBookUpCSS.authPop}>by {authorName}</p>
				<SelectSmall status={status} setStatus={setStatus} />
				<BasicRating value={value} setValue={setValue} />
			<button type='submit' onClick={handleClick} className={popBookUpCSS.submit}>post</button>
			</div>

		<div className={popBookUpCSS.popUp}>
			<button className={popBookUpCSS.button} onClick={onClick}>x</button>
		</div>
	</div>
	);
}

export default PopBookUp;