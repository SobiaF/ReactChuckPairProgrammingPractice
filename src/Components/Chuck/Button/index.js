import React from 'react'
import UserContext from "../../UserContext";

// Because Button is in Chuck, which is in App, we have access to the context
function Button() {
    return (
        <UserContext.Consumer>
            {({joke}) =>
                <div>
                    <button>{joke}</button>
                    <h3>{joke}</h3>
                </div>
            }
        </UserContext.Consumer>
    )
}

export default Button
