import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
    
    const { counter, increment } = useCounter();

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    // Funciona como useEffect, pero se ejecuta luego de que se renderizó todo
    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p 
                    className=""
                    ref={ pTag }
                >
                { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button className="btn btn-primary" onClick={ increment }>
                    Next quote
            </button>
        </div>
    )
}
