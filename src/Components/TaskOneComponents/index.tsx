import React, { useState } from "react";
import './index.css';

export class Component extends React.Component<{componentName: string}>{
    render(){
        return(
            <div>Hello from {this.props.componentName}</div>
        )
    }
}


export class PureComponent extends React.PureComponent{
    render(){
        return(
            <div>Hello from React.PureComponent</div>
        )
    }
}

export const FunctionalComponent: React.FC = () => {
    const [counter, setCounter] = useState(0)
    
    return (
        <div className="counter">
            <div>Hello from React.FC</div>
            <div>Current counter value is:<span className="counter__value">{counter}</span></div>
            <div>
                <button className="counter_button" onClick={() => setCounter(counter - 1)}>-</button>
                <button className="counter_button" onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div className="counter__info">To change value click on particular button</div>
        </div>
        
    )
}

export const ReactElement = () => {
    return React.createElement('div', null, 'Hello from React.createElement')
}