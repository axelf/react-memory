import React, { useState } from 'react';
import Board from './components/Board';
import LevelSelector from './components/LevelSelector';
import './styles/main.scss';

function App() {
    const [isLevelSelected, setIsLevelSelected] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('');

    const selectLevel = (level) => {
        setSelectedLevel(level);
        setIsLevelSelected(true);
    }

    return (
        <div className="container">
            <h1 className="text-center app-title">Memory for Webdevs</h1>
            {isLevelSelected ? <Board selectedLevel={selectedLevel} /> : <LevelSelector onClick={selectLevel} />}
        </div>
    )
}

export default App;
