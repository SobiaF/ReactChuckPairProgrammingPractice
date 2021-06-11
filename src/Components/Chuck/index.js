import React, { useState, useEffect } from 'react';

function ChuckJokes() {
    const [joke, setJoke] = useState("hello")
    function GetChuckJokes() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(data=>data.json())
            .then((data)=>{
                setJoke(data.value)
            })
    }
    useEffect(() => {
       GetChuckJokes()

    },[])
     return(
         <div>
             <button onClick={GetChuckJokes}>Get Joke</button>
             <h3>{joke}</h3>
         </div>
     )
    }


        export default ChuckJokes