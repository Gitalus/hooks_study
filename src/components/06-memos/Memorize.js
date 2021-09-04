import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {

    // Cada vez que haya cambio en un state, se volverá a renderizar este componente
    // independiente si hay un componente donde sus props no han cambiado, se renderizará también


    const { counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small counter={ counter }/></h1>
            <hr />
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
