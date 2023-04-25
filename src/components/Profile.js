import React, { useEffect } from "react";


const Profile = ({ token, posts, BASE_URL }) => {

    


    const myData = async () => {
        try {
            const res = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log(data)
            setPosts(results.data.posts);
            
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const deletedPost = await response.json();
            console.log(deletedPost);
        } catch (error) {
            console.log('err'.err);
        }
    };

    const handleDelete = async (id) => {
        await deletePost(id)
        myData()
    }

    useEffect(() => {
        myData();

    }, []);

    return (
     <>
        <div>
            {posts && posts?.map((post) => {

            //     return post.active
            // }).map((post, i) => {
                return (
                    <div className="posts_info" key={post._id}>
                        <h2 className="postTitle" >Title: {post.title}</h2>
                        <h2 className="postPrice">Price: ${post.price}</h2>
                        <h2 className="postDescription" >Description: {post.description}</h2>

                        <div className="myMessages">
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


                        <div>{post.active === true ? <button className="deleteButton" onClick={() => handleDelete(post._id)} >Delete</button> : ''}
                        </div>
                    </div>
                )

            })}
            
        </div>
    </>
    )
};


export default Profile;