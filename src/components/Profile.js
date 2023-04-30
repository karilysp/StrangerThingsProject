import React, { useState, useEffect } from "react";
import { myData, deletePost, handleMessage } from '../ajax-requests'
import {  useNavigate } from 'react-router-dom'


const Profile = ({ posts, postMessage }) => {

  const navigate= useNavigate();    

  const [message, setMessage] = useState('')

    const handleDelete = async (postId) => {
        const deleted = await deletePost(postId)
        return deleted;
  
    }

    async function handleMessage(postId) {
        const result = await postMessage ({postId, message})
       console.log('message', result)
        setMessage();
    }

    const handleSubmit = async (event) => {
        if (results.success) {
            navigate('/profile')
        }
        handleMessage(posts._id);

    }

   


    return (
     <>
        <div>
            {posts && posts?.map((post) => {

            
                return (
                    <div className="profile" key={post._id}>
                        <h2 className="postTitle" >Title: {post.title}</h2>
                        <h2 className="postPrice">Price: ${post.price}</h2>
                        <h2 className="postDescription" >Description: {post.description}</h2>
                        

                        <div onSubmit={handleSubmit} className="myMessages">
                            {posts.messages?.map((message) => {
                                return (
                                    <div key={message._id}>
                                        <h3 className="gotMessages">message:</h3>
                                        <h4 className="messageUserName">From: {message.fromUser.username}</h4>
                                        <h4 className="messageContent">"{message.content}"</h4>

                                    </div>)
                            })
                            }
                        </div>


                        <div>{post.active === true ? <button className="deleteButton" onClick={() => handleDelete(post._id)}>Delete</button> : ''}
                        </div>
                    </div>
                )

            })}
            
        </div>
    </>
    )
};


export default Profile;