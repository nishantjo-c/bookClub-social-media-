
import updatesCSS from '../styles/updates.module.css';
import UpdateCard from './updateCard.js'


function Updates(
	{ bookTitle, coverVal, authorName }){
		
	return (
		<div className={updatesCSS.container}>
			<UpdateCard authorName={authorName} bookTitle={bookTitle} coverVal={coverVal}/>
		</div>
	);
}

export default Updates;