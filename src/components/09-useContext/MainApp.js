import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // React disparará una renderización en los hijos que usan el useContext cuando el value cambia
    const [user, setUser] = useState({});

    // Lo que uno quiere compartir con el context debe ser llamado value y su valor un objeto
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
