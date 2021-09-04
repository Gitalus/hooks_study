import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';
import { useEffect } from 'react/cjs/react.development';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( ( num = 1 ) => {
        setCounter( c => c + num);
    }, [ setCounter ])


    // También se usa con useEffect cuando queremos que una dependencia sea la función, pero que no se dispare
    // cada vez que renderizamos un componente
    useEffect(() => {
        // ??
    }, [increment])

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
