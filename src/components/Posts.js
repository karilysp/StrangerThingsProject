import React from 'react';
import { Link } from 'react-router-dom'



 

function Posts ({ posts, token, handleMessage}) {
  
    
    return (
        <>
        <h1 className='posts'>Posts</h1>
            {token === null ? '' : <Link className="add-post"to='/create-post'>(Add Post)</Link>}
            <div>
                
                <button className='search' onClick={event => window.location.href = '/Search'}>Search</button>

            </div>
       
                
     
            
            <div>
                {posts && posts.map((post) => {
                    return (
                        <div
                        key={post._id}
                        className= {post.isAuthor ? "myPost" : 'singlePost'}>
                            <h3 className='post-title'>{post.title}</h3>
                            <p>{post.description}</p>
                            <p><b>Price:</b> {post.price}</p>
                            <p><b>Date Posted:</b> {post.updatedAt}</p>
                            <p><b>Author:</b> {post.author.username}</p>
                            <Link className='edit-button' to={`/edit-post/${post._id}`}><button>Edit</button></Link>

                           
                           <div>
                            {token === null ? '' : <div>
                                {post.isAuthor === false ? <Link to="/Message">
                                    <button className="messageButton" onClick={() => handleMessage(post._id)}>Message</button>
                                </Link> : ''
                                }
                                        
                            </div>
                           
                            }
                                
                       </div> 
                   
                    
                    
                    
                    </div> 
                              
                 ) })
                 
                }   
                   
            </div>
        </>
        
                    );
                    
}





export default Posts;
