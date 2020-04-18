import React, { useState, useEffect } from 'react';
import Card from './Card';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Board = () => {
    const createCards = () => {
        const icons = [fab.faHtml5, fab.faCss3, fab.faJs, fab.faReact, fab.faVuejs, fab.faAngular];

        const cards = icons.concat(icons).map((icon, id) => {
            return { id, back: fab.faPagelines, front: icon, isOpen: false, isMatch: false };
        });

        return cards;
    }

    const [cards, setCards] = useState(createCards());
    const [openedCards, setOpenedCards] = useState([]);

    useEffect(() => {
        if (openedCards.length === 2) {
            checkMatch();
        }
    }, [openedCards])

    const onCardClick = (card) => {
        //console.log(card.id);
        setOpenedCards([...openedCards, card]);
        setCards(cards => cards.map(c => {
            return card.id === c.id ? { ...c, isOpen: true } : c;
        }));
    }

    const checkMatch = () => {
        if (openedCards[0].front === openedCards[1].front) {
            setCards(cards => cards.map(c => {
                return openedCards[0].id === c.id || openedCards[1].id === c.id ? { ...c, isMatch: true } : c;
            }));
            setOpenedCards([]);
        } else {
            window.setTimeout(() => {
                setCards(cards => cards.map(c => {
                    return openedCards[0].id === c.id || openedCards[1].id === c.id ? { ...c, isOpen: false } : c;
                }));
                setOpenedCards([]);
            }, 900);
        }
    }

    return (
        <>
            <h4>Offene Karten: {openedCards.length}</h4>
            <ul className="board">
                {cards.map((card, id) => {
                    return <Card onClick={() => onCardClick(card)} key={id} card={card} />
                })}
            </ul>
        </>
    )
}

export default Board;