import Navbar from "./components/navbar";
import PersonalUpdate from "./components/personalUpdate.js";
import Updates from "./components/updates.js";
import {useState} from 'react';
import PopBookUp from './components/popBookUp.js';

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
	<>
		<Navbar 
	        search={search} 
	        setSearch={setSearch}
	        coverVal={coverVal}
	        bookTitle={bookTitle}
	        authorName={authorName}
	        onClick={handleOpenPopup}
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

	      <div className='components'>
	        <PersonalUpdate />

	        <Updates 
	          search={search}
	          data={data}
	          setData={setData}
	          bookTitle={bookTitle}
	          setBookTitle={setBookTitle}
	          coverVal = {coverVal}
	          setCoverVal = {setCoverVal}
	          authorName = {authorName}
	          setAuthorName = {setAuthorName}
	        />
	      </div>
	</>
	);
}

export default Wrapper;