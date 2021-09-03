import React from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const handleClick = () => {
        // Changed to select, so we select the input that is already in
        document.querySelector('input').select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
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
