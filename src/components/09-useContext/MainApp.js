import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id: 1234,
        mame: 'Italo',
        email: 'italog.penaloza@gmail.com'
    }

    // Lo que uno quiere compartir con el context debe ser llamado value y su valor un objeto
    return (
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    )
}
