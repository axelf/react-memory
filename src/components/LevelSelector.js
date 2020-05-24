import React, { useState } from 'react';
import { levels } from '../Config';

const LevelSelector = ({ onClick }) => {
    const handleClick = (e) => {
        const level = levels.find(level => level.id === parseInt(e.target.dataset.level, 10));
        onClick(level);
    }

    return (
        <>
            <h3 className="text-center">First select your level:</h3>
            <ul className="levels">
                {levels.map((level) => {
                    return <li data-level={level.id} onClick={handleClick} key={level.id}>{level.name}</li>
                })}
            </ul>
        </>
    )
}

export default LevelSelector;