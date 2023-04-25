import React from "react";

function Home ({username}) {
    return (
        <div>
            <h1>Welcome to Stranger's Things!</h1>
            <h2>Logged in as {`${username}`}</h2>
            <button onClick={event => window.location.href='/profile'}>View Profile</button>

        </div>
    )
}



export default Home;