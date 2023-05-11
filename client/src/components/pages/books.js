import pageCSS from './styles/pages.module.css'
import { useState,useEffect } from 'react'


function Books(){

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [authKey, setAuthKey] = useState(null);
	const [url, setUrl] = useState('');

	useEffect(()=> {
		const data = async () => {
			const response = await fetch('https://openlibrary.org/search.json?title=harry+potter');
			const data = await response.json();
			return data;
		}
		data().then(responseData => {
			console.log(responseData.docs[0]);

			setAuthKey(responseData.docs[0].author_key[0]);
			setUrl(`https://openlibrary.org/authors/${authKey}/works.json`);

			setTitle(responseData.docs[0].title);
			setAuthor(responseData.docs[0].author_name[0]);
		})

	}, [])

setTimeout(() => {
		const data = async () => {
			const response = await fetch(url);
			const data = await response.json()
			return data;
		}
		data().then( data => console.log(data) );
	}, 5000)

	return (
		<div className={pageCSS.booksDiv}>
			<h1>hey books!!!</h1>
			<div className={pageCSS.names}>
				<h3>{title}</h3>
				<h3> - </h3>
				<h3>{author}</h3>
			</div>
			<p>description</p>
		</div>
	);
}

export default Books;