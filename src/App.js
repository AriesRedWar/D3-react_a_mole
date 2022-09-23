import './App.css';
import { useState } from 'react'
import MoleContainer from './Components/MoleContainer'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        // settings of how many Hills and Moles to be popping up
        for (let i = 0; i < 12; i++) {
            hills.push(
                <MoleContainer
                key= {i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App
