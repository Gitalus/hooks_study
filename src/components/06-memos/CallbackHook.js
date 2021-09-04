import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( () => {
        setCounter( c => c + 1);
    }, [ setCounter ])

    // Cuando volvemos a renderizar el componente, esta función se vuelve a guardar
    // en un nuevo espacio de memoria, por lo tanto se considera que cambia.
    // Por consiguiente, se le está pasando una nueva función al Componente ShowIncrement y se vuelve a renderizar
    // incluso aunque tenga un React.memo

    // Ejemplo de caso de uso de callback. Se ve que al pasarle una función,
    // el componente ShowIncrement se vuelve a generar cada vez que counter cambia.
    // Es correcto, ya que se renderiza el componente padre al cambiar su estado.
    // Pero podemos usar useCallback para mejorar esto

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>

    )
}
