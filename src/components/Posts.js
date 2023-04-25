import React from 'react';
import { Link } from 'react-router-dom'

 

function Posts({ posts }) {
   

    return (
        <>
            
            
            <h1>Posts <Link to='/create-post'>Add Post</Link></h1>
            
            
                {posts && posts.map((post) => {
                    return (
                        <div
                        key={post._id}
                        className= {post.isAuthor ? "myPost" : 'singlePost'}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <p>Price: {post.price}</p>
                            <p>Date Posted: {post.updatedAt}</p>
                            <p>Author: {post.author.username}</p>
                            {post.isAuthor ? <button>Edit</button> :null}
                            {post.isAuthor ? <button>Delete</button> :null}
                       </div> 
                    )
                })
            }
        </>
    );
}





export default Posts;
