import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    // El ref puede cambiar a lo que apunta sin necesidad de disparar una renderización
    const inputRef = useRef();

    const handleClick = () => {
        // Changed to select, so we select the input that is already in
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                className="form-control" 
                placeholder="Su nombre"
            />
            <button 
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
