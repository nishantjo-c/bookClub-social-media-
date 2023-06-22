import pageCSS from './styles/books.module.css'
import { useState,useEffect } from 'react'



function Books(){

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [firstSentence, setFirstSentence] = useState(null);
	const [characterList, setCharacterList] = useState(null);

	const [books, setBooks] = useState([]);

	// useEffect(()=> {
	// 	const data = async () => {
	// 		try{
	// 			const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=15&orderBy=relevance&key=AIzaSyCj5h3EEogCMJdboascLsGo8ZsPcczwqnc');
	// 			const data = await response.json();
	// 			console.log(data)
	// 			setBooks(data.items);
	// 		}
	// 		catch(error){
	// 			console.log(error);
	// 		}
	// 	}
	// 	data();
	// }, [])


	return (
		<div className={pageCSS.booksDiv}>
			{books.map((book, key) => {
				return (
					<div className={pageCSS.innerbooksDiv} key={key}>
						<h2>{book.volumeInfo.title}</h2>
						<h4>by: {book.volumeInfo.authors[0]}</h4>
						<p>{book.volumeInfo.description}</p>
						<br/>
					</div>
				)
			})}
		</div>
	);
}

export default Books;

// <div className={pageCSS.innerbooksDiv}>
// 				<div className={pageCSS.names}>
// 					<h3>{title} - {author}</h3>
// 				</div>
// 				<p><b>The story starts as:</b> <i>{firstSentence == null ? 'nothing here':firstSentence}</i></p>
// 				{characterList == null ? 'nothing here' : characterList.map(name => <p>{name}</p>)}
// 			</div>