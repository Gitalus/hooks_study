import React from 'react'

export const Small = ({ counter }) => {

    // Se creó un nuevo componente para que se renderizara cada vez que cambia el valor de counter
    console.log('Me volví a renderizar');

    return (
        <small>
            { counter }
        </small>
    )
}
