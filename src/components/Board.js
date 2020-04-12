import React from 'react';
import Card from './Card';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Board = () => {
	const cards = [fab.faHtml5, fab.faCss3, fab.faJs, fab.faReact, fab.faVuejs, fab.faAngular];

	return (
		<ul className="board">
			{cards.map((icon, id) => {
				return <Card key={id} card={{ id, icon }} />
			})}
		</ul>
	)
}

export default Board;