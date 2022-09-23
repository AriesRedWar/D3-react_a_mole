import { useEffect } from 'react'
import moleImg from '../assets/mole.png'

const Mole = (props) => {
    // time frame of the mole to pop up and go back down math random
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    // image of the mole size
    return (
        <div>
            <img style={{'width': '20vw'}} src={moleImg} onClick={props.handleClick} alt="brown ugly Mole"/>
        </div>
    )
}

export default Mole