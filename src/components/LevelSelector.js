import React, { useState } from 'react';

const LevelSelector = ({ onClick }) => {
    const levels = ['Easy', 'Medium', 'Hard', 'Out of this World'];

    const handleClick = (e) => {
        onClick(parseInt(e.target.dataset.level, 10));
    }

    {/*
            <div>
            <input onClick={handleClick} type="radio" name="level" value="1" /> Level 1
            <input onClick={handleClick} type="radio" name="level" value="2" /> Level 2
            <input onClick={handleClick} type="radio" name="level" value="3" /> Level 3
        </div>
        */}
    return (
        <>
            <h3 class="text-center">First select your level:</h3>
            <ul class="levels">
                {levels.map((title, level) => {
                    return <li data-level={level} onClick={handleClick}>{title}</li>
                })}
                {/*<li>Out of this world</li>*/}
            </ul>
        </>

    )
}

export default LevelSelector;