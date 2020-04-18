import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ card, onClick }) => {
	return (
		<li className={"card" + (card.isMatch ? " is-match" : "")} data-id={card.id} onClick={onClick}><FontAwesomeIcon icon={card.isOpen ? card.front : card.back} /></li>
	)
}

export default Card;