import React, { useState } from 'react'
import './styles.scss'

const SimpleCounter: React.FC<{}> = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="simple-counter">
            <div>
        Current counter value is:&nbsp;<span className="simple-counter__value">{counter}</span>
            </div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div className="simple-counter__info">
        Click on the button to change value of counter
            </div>
        </div>
    )
}

export default SimpleCounter
