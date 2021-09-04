import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    // Cada vez que haya cambio en un state, se volverá a renderizar este componente
    // independiente si hay un componente donde sus props no han cambiado, se renderizará también


    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);

    const procesoPesado = ( iteraciones ) => {
        for ( let i = 0; i < iteraciones; i++) {
            console.log('Ahí vamos...');
        }

        return `${ iteraciones } iteraciones realizadas`;
    }

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ procesoPesado( counter ) }</p>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
            +1
            </button>

            {/* Se vuelve a llamar el componente Small cada vez que clickeo este botón */}
            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => {
                    setShow( !show  );
                }}
            >
                {/* Se usa stringify porque es un booleano */}
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
