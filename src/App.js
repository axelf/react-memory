import React, { useState } from 'react';
import Board from './components/Board';
import LevelSelector from './components/LevelSelector';
import './styles/main.scss';

function App() {
    const [isLevelSelected, setIsLevelSelected] = useState(false);

    const selectLevel = (level) => {
        setIsLevelSelected(true);
    }

    return (
        <div className="container">
            <h1 class="text-center">Memory for Webdevs</h1>
            {isLevelSelected ? <Board /> : <LevelSelector onClick={selectLevel} />}
        </div>
    )
}

export default App;
