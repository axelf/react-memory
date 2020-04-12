import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
	return (
		<li> xx <FontAwesomeIcon icon={props.card.icon} /></li>
	)
}

export default Card;