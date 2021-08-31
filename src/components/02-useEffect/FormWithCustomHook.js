import React, { useState } from 'react'
import './effects.css'

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const { name, email, password } = formState;

    function handleInputChange({ target }) {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        })
    }
    

    return (
        <>
            <h1>FormWithCustomHook</h1>
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
            <br />

            <div className="form-group">
                <input 
                    type="password" 
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={ password }
                    onChange={ handleInputChange }
                    />
            </div>

        </>
    )
}