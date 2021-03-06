import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    function handleInputChange({ target }) {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        })
    }
    
    const { name, email } = formState;


    useEffect( () => {
    }, [] );

    useEffect( () => {
    }, [formState] );

    useEffect( () => {
    }, [email] );


    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <br />

            <div className="form-group">
                <input 
                    type="text" 
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message /> }
        </>
    )
}
