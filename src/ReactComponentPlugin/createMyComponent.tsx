import * as React from 'react';
import * as ReactDOM from 'react-dom';

function createMyComponent (props: any = {}) {
    return <div className={'my-first-react-component'}>
      <div onClick={() => alert(props.value)}>Sample Value: {props.value}</div> 
      <div style={{backgroundColor: 'blue', border: '5px solid white'}}>
        <div style={{color: 'yellow' }}>Color: {props['background-color']}</div>    
      </div>
    </div>
}

export default function render (props: any, container: HTMLElement) {
    return ReactDOM.render(createMyComponent(props), container)
}