import updateCardCSS from './styles/updateCard.module.css'

function UpdateCard(props){
	const coverVal = props.coverVal;
	return (
		<div className={updateCardCSS.container}>
			<h2>{props.bookTitle}</h2>
			<p>{props.authorName}</p>
			<img src={coverVal} alt="no image yet!" />
		</div>
	);}

export default UpdateCard;