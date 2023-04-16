import { useEffect, useState } from 'react';

import updatesCSS from './updates.module.css';
import UpdateCard from './updateCard.js'

function Updates(){
	const [data, setData] = useState(''); 

	useEffect(() => {
		fetch('https://openlibrary.org/search.json?title=a+little+life')
		.then(res => res.json())
		.then(data => {
			setData(data);
		})
	},[])

	console.log(data.docs);

	return (
		<div className={updatesCSS.container}>
			<UpdateCard />
		</div>
	);
}

export default Updates;