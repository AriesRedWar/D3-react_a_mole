import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, popMole] = useState(false)

        // adds the score when yuou click on the mole
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        popMole(false)
    }
    // when clicking on the mole it removes the image form the page
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={popMole} handleClick={handleClick} /> : <EmptySlot toggle={popMole} />

    return (
        // Layout of the mounds on the page
        <div style={{'display': 'inline-block', 'width': '25vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer