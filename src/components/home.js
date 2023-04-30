import React from "react";

const Home = ({user}) => {
    return (
        <div className="home">
            <h1 className="home-title">Welcome to Stranger's Things!</h1>
            <button className="home-button"  onClick={event => window.location.href='/Login'}>Log In</button>

        </div>
    )
}



export default Home;