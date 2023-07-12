import Navbar from "./components/navbar";
import {useState} from 'react';
import PopBookUp from './components/popBookUp.js';

import { BrowserRouter, Route, useHistory } from 'react-router-dom';

import Books from './components/pages/books.js';
import Discussion from './components/pages/discussion.js';
import Profile from './components/pages/profile.js';

import Post from './components/post.js'

import {useEffect} from 'react'

import wrapperCSS from './styles/wrapper.module.css';

function Wrapper(){

/* Lifted States */

  const [search, setSearch] = useState('');
  const [data, setData] = useState(''); 
  const [bookTitle, setBookTitle] = useState('no title!');
  const [coverVal, setCoverVal] = useState(null);
  const [authorName, setAuthorName] = useState('no author name!');

  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

	useEffect(()=> {
		if(!localStorage.getItem('userUniqueId')){
			history.push('/login');
		}
		else{
			history.push('/home')
		}
	},[])


  const handleOpenPopup = () => {
  	history.push('/home/pop')
    setIsOpen(true);
  }
  const handleClosePopup = () => {
  	history.push('/home')
    setIsOpen(false);
  }

	return (
	  <BrowserRouter>

		<div className={wrapperCSS.row}>

			<div className={`${wrapperCSS.navContainer} ${wrapperCSS.col_1_of_3}`}>
				{/* <p>hello</p> */}
			<Navbar 
				search={search} 
				setSearch={setSearch}
				coverVal={coverVal}
				bookTitle={bookTitle}
				authorName={authorName}
				onClick={handleOpenPopup}

				setData={setData}
						setBookTitle={setBookTitle}
						setCoverVal = {setCoverVal}
						setAuthorName = {setAuthorName}
			/>
			</div>


			<div className='pop-up'>
				<PopBookUp 
				isOpen={isOpen} 
				onClick={handleClosePopup}
				coverVal={coverVal}
				bookTitle={bookTitle}
				authorName={authorName}>
			</PopBookUp>
			</div>



				<div className={`${wrapperCSS.postContainer} ${wrapperCSS.col_1_of_3}`}>
					{/* <Route exact path='/home' component={Post} /> */}
					<h1>Home</h1>
				</div>
				
				<div className={`${wrapperCSS.col_1_of_3}`}>
					<h1>third container...</h1>
				</div>
		  
	      {/* <Route exact path='/books' component={Books} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/discussion' component={Discussion} /> */}
		</div>
		
	  </BrowserRouter>

	);
}

export default Wrapper;