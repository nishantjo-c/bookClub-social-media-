import pageCSS from './styles/books.module.css'
import { useState,useEffect } from 'react'


function Books(){

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [firstSentence, setFirstSentence] = useState(null);
	const [characterList, setCharacterList] = useState(null);

	useEffect(()=> {
		const data = async () => {
			const response = await fetch('https://openlibrary.org/search.json?title=fifty+shades+of+grey');
			const data = await response.json();
			return data;
		}
		data().then(responseData => {
			console.log(responseData.docs[0]);
			try{
				setTitle(responseData.docs[0].title);
			}
			catch(error){
				console.log(error);
			}

			try{
				setAuthor(responseData.docs[0].author_name[0]);
			}
			catch(error){
				console.log(error)	
			}

			try{
				setFirstSentence(responseData.docs[0].first_sentence[0])
			}
			catch(error){
				console.log(error)
			}

			try{
				setCharacterList(responseData.docs[0].person)
			}
			catch(error){
				console.log(error)	
			}
		})
	}, [])


	return (
		<div className={pageCSS.booksDiv}>
			<div className={pageCSS.innerbooksDiv}>
				<div className={pageCSS.names}>
					<h3>{title} - {author}</h3>
				</div>
				<p><b>The story starts as:</b> <i>{firstSentence == null ? 'nothing here':firstSentence}</i></p>
				{characterList == null ? 'nothing here' : characterList.map(name => <p>{name}</p>)}
			</div>
		</div>
	);
}

export default Books;