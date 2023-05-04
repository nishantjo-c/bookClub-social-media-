import popBookUpCSS from '../styles/popBookUp.module.css';

import {SelectSmall, BasicRating} from './bookStatus';

const PopBookUp = ({isOpen, onClick, coverVal, bookTitle, authorName}) => {

	if(!isOpen){
		return null;
	}

return (
	<div className={popBookUpCSS.popUpParent}>

		<img src={coverVal} alt="no image yet!" />
			<div className={popBookUpCSS.information}>
				<h2 className={popBookUpCSS.titlePop}>{bookTitle}</h2>
				<p className={popBookUpCSS.authPop}>by {authorName}</p>
				<SelectSmall />
				<BasicRating />
		</div>

		<div className={popBookUpCSS.popUp}>
			<button onClick={onClick}>x</button>
		</div>
	</div>
	);
}

export default PopBookUp;