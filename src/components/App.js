import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
    Register,
    Posts,
    Login,
    CreatePost, 
    Profile,
    Home,
    Message,
    Search,
    EditPost,
    Nav
 } from './';
import { fetchPosts } from '../ajax-requests'
import { myData } from '../ajax-requests'



export function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [LoggedIn, setLoggedIn]= useState(false);

    const navigate= useNavigate();


  

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


    async function getMyData() {
        const results = await myData(token);
        if (results.success) {
            setUser(results.data);
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect (() => {
        getPosts();
        if (token){
            getMyData();
            setLoggedIn(true);
        }
    }, [token])


    return (
        <div>
           
            <Nav 
            setToken={setToken}
            setLoggedIn={setLoggedIn}
            LoggedIn={LoggedIn}
            />
    
            <Routes>
            
                <Route
                    path='/posts'
                    element={<Posts posts={posts} Message={Message} />}
                />
             <Route
                    path='/register'
                    element = {<Register setToken={setToken} />} 
             />
            <Route
                    path='/login'
                    element ={<Login setToken={setToken} navigate={navigate} /> }
            />
            <Route
                    path= '/create-post'
                    element={<CreatePost token={token} getPosts={getPosts} />}
            />
                <Route
                    path='/profile'
                    element={<Profile token={token} posts={posts}  />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/message'
                    element={<Message />}
                />
                <Route
                    path='/search'
                    element={<Search />}
                />
                <Route
                    path='/edit-post/:postId'
                    element={<EditPost posts={posts} token={token}  getPosts={getPosts}/>}
                />
               
            </Routes>
        </div>
    );
}

export default App;