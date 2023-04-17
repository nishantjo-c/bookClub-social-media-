import updateCardCSS from './styles/updateCard.module.css'

function UpdateCard(props){
	console.log(props.authorName)
	return (
		<div className={updateCardCSS.container}>
			<h2>{props.bookTitle}</h2>
			<p>{props.authorName}</p>
		</div>
	);}

export default UpdateCard;