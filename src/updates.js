import { useEffect, useState } from 'react';

import updatesCSS from './updates.module.css';
import UpdateCard from './updateCard.js'

function Updates(){

	const [data, setData] = useState(''); 
	const [bookTitle, setBookTitle] = useState('no title!');
	const [authorName, setAuthorName] = useState('no author name!');

	useEffect(() => {
		const data = async () => {
		const response = await fetch('https://openlibrary.org/search.json?title=a+little+life')
		const data = await response.json();
		setData(data);
		return data;
		}
		data().then(data => {
			data = data.docs;
			setBookTitle(data[0].title);
			setAuthorName(data[0].author_name[0]);
		});
	},[])
	
	return (
		<div className={updatesCSS.container}>
			<UpdateCard authorName={authorName} bookTitle={bookTitle}/>
		</div>
	);
}

export default Updates;