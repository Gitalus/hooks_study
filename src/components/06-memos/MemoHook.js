import React, { useMemo, useState } from 'react';
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


    // Recibe un callBack y las dependecias como en useEffect
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

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
