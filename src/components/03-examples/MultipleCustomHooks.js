import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );

    const { author, quote } = !!data && data[0]; // Doble negación para asignar undefined y no null

    console.log( quote, author );

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="">Hola Mundo</p>
                        <footer className="blockquote-footer">Italo</footer>
                    </blockquote>
                )
            }
        </div>
    )
}
