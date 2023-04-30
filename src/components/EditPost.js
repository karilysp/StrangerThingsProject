import React, {  useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { updatePost } from '../ajax-requests'

function EditPost ({ posts, token, getPosts  }) {
    

const { postId } = useParams();
const navigate = useNavigate();

const [post] = posts.filter((post) => post._id === postId)

const {title, description, price, location, willDeliver} = post;

const [updatedTitle, setTitle] = useState(title);
const [updatedDescription, setDescription] = useState(description);
const [updatedPrice, setPrice] = useState(price);
const [updatedLocation, setLocation] = useState(location);
const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedPost = {
            title: updatedTitle,
            description: updatedDescription,
            price: updatedPrice,
            location: updatedLocation,
            willDeliver: updatedWillDeliver
        }

        const results = await updatePost(postId, token, updatedPost);
        if (results.success) {
            getPosts();
            navigate('/posts');
        }
    }


    return (
    <>
        {post ? (    
<form className="edit-post" onSubmit={handleSubmit}>
    <h1 className="editTitle">Edit Post</h1>
    <input
    className="edit-title"
    type='text'
    value={updatedTitle}
    onChange={(ev) => setTitle(ev.target.value)}
    />
    <input
    className="edit-description"
    type='text'
    value={updatedDescription}
    onChange={(ev) => setDescription(ev.target.value)}
    />
    <input
    className="edit-price"
    type='text'
    value={updatedPrice}
    onChange={(ev) => setPrice(ev.target.value)}
    />
    <input
    className="edit-location"
    type='text'
    value={updatedLocation}
    onChange={(ev) => setLocation(ev.target.value)}
    />
    <input
    className="willDeliver"
    type='checkbox'
    checked={updatedWillDeliver}
    onChange={() => setWillDeliver(!updatedWillDeliver)}
    />
    <button type="submit">Save</button>
</form>
        ) : (
            <h1> Post Does Not Exist.</h1>
        )}
        </>
    )
}


export default EditPost;