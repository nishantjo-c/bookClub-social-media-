import { useEffect, useState } from 'react';

import updatesCSS from './styles/updates.module.css';
import UpdateCard from './updateCard.js'
import useDebounce from './hooks/useDebounce.js'

function Updates(
	{ search, data, setData, bookTitle, setBookTitle, coverVal, setCoverVal, authorName, setAuthorName }){
	
	const newSearch = useDebounce(search.replace(/\s+/g, "+"));

	useEffect(() => {
		const data = async () => {
		const response = await fetch(`https://openlibrary.org/search.json?title=${newSearch}`)
		const data = await response.json();
		setData(data);
		return data;
		}
		data().then(data => {
			data = data.docs;
			// console.log(data)
			setBookTitle(data[0].title);
			setAuthorName(data[0].author_name[0]);
			setCoverVal(`https://covers.openlibrary.org/b/isbn/${data[0].isbn[0]}-M.jpg`);
		});
	},[newSearch])
	
	return (
		<div className={updatesCSS.container}>
			<UpdateCard authorName={authorName} bookTitle={bookTitle} coverVal={coverVal}/>
		</div>
	);
}

export default Updates;