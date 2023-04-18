import updateCardCSS from './styles/updateCard.module.css'

function UpdateCard(props){
	const coverVal = props.coverVal;
	return (
		<div className={updateCardCSS.container}>
			<img src={coverVal} alt="no image yet!" />
			<div className={updateCardCSS.information}>
				<h2>{props.bookTitle}</h2>
				<p>{props.authorName}</p>
			</div>
		</div>
	);}

export default UpdateCard;