import { useEffect, useState } from 'react';

export default function Intro(props){
    const [ counter, setCounter ] = useState(0);
    const [ semaforo, setSemaforo ] = useState(false);
    const { message, name } = props;

        useEffect(() => {
            console.log(semaforo);
        },[semaforo]); 

    const contar = () => {
        setCounter(counter+ 1);
        setSemaforo(!semaforo);
    }
    
    return(
        <div></div>
    /*<div>
        <p>Hey</p>
        <p>{ message }</p>
        <h4>El numero de clicks es: {counter} </h4>
        <p>El semaforo se pondra de color {semaforo ? "rojo" : "verde"} </p>
        <h2>Contador con Hooks</h2>
         <button type="submit" onClick={contar}>
            Sumar ++
         </button>
    </div>*/
    );
}