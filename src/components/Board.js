import React, { useState, useEffect } from 'react';
import Card from './Card';
import { faIcons } from '../Config';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Board = ({ selectedLevel }) => {
    const createCards = () => {
        //const icons = [fab.faHtml5, fab.faCss3, fab.faJs, fab.faReact, fab.faVuejs, fab.faAngular];
        const icons = faIcons.slice(0, selectedLevel.numOfPairs);

        const cards = icons.concat(icons).map((icon, id) => {
            return { id, back: fab.faPagelines, front: fab['fa' + icon], isOpen: false, isMatch: false };
        });

        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        // Shuffle cards
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }

        return cards;
    }

    const [cards, setCards] = useState(createCards());
    const [openedCards, setOpenedCards] = useState([]);
    const [matches, setMatches] = useState(0);
    const [boardIsReady, setBoardIsReady] = useState(false);

    useEffect(() => {
        if (!boardIsReady) {
            setBoardIsReady(true);
        }
    }, [boardIsReady])

    useEffect(() => {
        if (openedCards.length === 2) {
            checkMatch();
        }
    }, [openedCards])

    useEffect(() => {
        if (matches === cards.length) {
            alert('Game finished, you are awesome!!!');
            setCards(createCards());
            setMatches(0);
        }
    }, [matches])

    const onCardClick = (card) => {
        if (card.isMatch || openedCards.length == 2) return false;

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
            setMatches(matches + 2);

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
            <ul className={`board board--level-${selectedLevel.id} ${boardIsReady ? 'show' : ''}`}>
                {cards.map((card, id) => {
                    return <Card onClick={() => onCardClick(card)} key={id} card={card} />
                })}
            </ul>
        </>
    )
}

export default Board;