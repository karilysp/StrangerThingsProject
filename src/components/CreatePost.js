import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import { Link, useNavigate } from 'react-router-dom';

function CreatePost({ token, getPosts }) {
    const navigate= useNavigate();
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ price, setPrice ] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();
		const post = { title, description, price };

		const results = await makePost(token, post);

		if (results.success) {
			getPosts();
            navigate('/posts')
		}
	}

	return (
		<form className="create-post" onSubmit={handleSubmit}>
			<h1 className="createTitle">Create Post</h1>
			<input
				className="create-title"
				type="text"
				placeholder="Enter Title"
				value={title}
				onChange={(event) => {
					setTitle(event.target.value);
				}}
			/>
			<input
				className="create-description"
				type="text"
				placeholder="Enter Description"
				value={description}
				onChange={(event) => {
					setDescription(event.target.value);
				}}
			/>
			<input
				className="create-price"
				type="text"
				placeholder="Enter Price"
				value={price}
				onChange={({ target: { value } }) => {
					setPrice(value);
				}}
			/>
			<button className="createPostButton" type="submit">
				Create Post
			</button>

			<Link className="go-home" to="/posts">
				Go Home
			</Link>
		</form>
	);
}

export default CreatePost;
