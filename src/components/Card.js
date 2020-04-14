import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
	const [icon, setIcon] = useState(props.card.back);

	const handleClick = (event) => {
		setIcon(props.card.front);
	}

	return (
		<li className="card" data-id={props.card.id} onClick={handleClick}><FontAwesomeIcon icon={icon} /></li>
	)
}

export default Card;