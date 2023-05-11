import Navbar from "./components/navbar";
import PersonalUpdate from "./components/personalUpdate.js";
import Updates from "./components/updates.js";
import {useState} from 'react';
import PopBookUp from './components/popBookUp.js';

import { BrowserRouter, Route } from 'react-router-dom';

import Books from './components/pages/books.js';
import Discussion from './components/pages/discussion.js';
import Profile from './components/pages/profile.js';

function Wrapper(){

/* Lifted States */

  const [search, setSearch] = useState('');
  const [data, setData] = useState(''); 
  const [bookTitle, setBookTitle] = useState('no title!');
  const [coverVal, setCoverVal] = useState(null);
  const [authorName, setAuthorName] = useState('no author name!');

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  }
  const handleClosePopup = () => {
    setIsOpen(false);
  }

	return (
	  <BrowserRouter>

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

	      <div className='pop-up'>
	        <PopBookUp 
	          isOpen={isOpen} 
	          onClick={handleClosePopup}
	          coverVal={coverVal}
	          bookTitle={bookTitle}
	          authorName={authorName}>
	       </PopBookUp>
	      </div>

	      {/*<div className='components'>
	      	        <PersonalUpdate />
	      
	      	        <Updates 
	      	          bookTitle={bookTitle}
	      	          coverVal = {coverVal}
	      	          authorName = {authorName}
	      	        />
	      	      </div>*/}

	  		<Route exact path='/books' component={Books} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/discussion' component={Discussion} />
	  </BrowserRouter>

	);
}

export default Wrapper;