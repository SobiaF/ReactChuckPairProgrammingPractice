import React from 'react'

// Gives us access to:
// UserContext.Provider (For the top common ancestor, it's where we store the data)
// UserContext.Consumer (For where you actually need to access the data)
const UserContext = React.createContext()

export default UserContext