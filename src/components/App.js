import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
    Register,
    Posts,
    Login,
    CreatePost, 
    Profile,
    Home
 } from './';
import { fetchPosts } from '../ajax-requests'



function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);
    

    function tokenCheck() {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        
        }
    }

  async  function getPosts () {
        const results =await fetchPosts();
        if (results.success) {
            setPosts(results.data.posts)
        }
    }

//   function Nav ({ setToken }) {

//     function logout () {
//         setToken('');
//         window.localStorage.removeItem("token")
//     }
//   }

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect (() => {
        getPosts();
        // if (token){
        //     myData();
        // }
    }, [token])


    const logout = () => {
        localStorage.clear();
        
    }

    return (
        <div>
           
            <nav setToken={setToken}>
                <h1 className='title'>Stranger's Things</h1>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li> <Link to='/posts'>Posts </Link></li>
                <li><Link to='/profile'>Profile</Link></li> 
                <li><button onClick={logout}>Log Out</button></li>
                </ul>

                {/* fix!!!!!!!!!! */}
            </nav>
            <Routes>
             <Route
             path='/'
             element= {<Login/>}
             />
                <Route
                    path='/posts'
                    element={<Posts posts={posts} />}
                />
             <Route
                    path='/register'
                    element = {<Register setToken={setToken} />} 
             />
            <Route
                    path='/login'
                    element ={<Login setToken={token} /> }
            />
            <Route
                    path= '/create-post'
                    element={<CreatePost token={token} getPosts={getPosts} />}
            />
                <Route
                    path='/profile'
                    element={<Profile token={token} posts={posts} />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
            </Routes>
        </div>
    )
}

export default App;