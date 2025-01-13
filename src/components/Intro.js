import { useState } from 'react';
export default function Intro(props){
    const [ counter, setCounter ] = useState(0);

    console.log(props);
    const { message } = props;
    return(
    <div>
        <p>Hey</p>
        <p>{ message }</p>
        <h4>El numero de clicks es: {counter} </h4>
        <h2>Contador con Hooks</h2>
         <button type="submit" onClick={() => setCounter(counter + 1)}>
            Sumar :D
         </button>
    </div>)
}