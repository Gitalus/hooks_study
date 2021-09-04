import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const Layout = () => {
    
    const { counter, increment } = useCounter();

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    const { author, quote } = !!data && data[0]; // Doble negación para asignar undefined y no null


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p className="">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
            <button className="btn btn-primary" onClick={ increment }>
                    Next quote
            </button>
        </div>
    )
}
