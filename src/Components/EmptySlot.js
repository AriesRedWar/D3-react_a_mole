import { useEffect } from "react"
import MoleHill from '../assets/molehill.png'

const EmptySlot = (props) => {
    // time frame of the mole to pop up and go back down math random
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    // image of the empty hill size
    return (
        <div>
            <img style={{'width': '20vw'}} src={MoleHill} alt="Empty mole Hill"/>
        </div>
    )
}

export default EmptySlot