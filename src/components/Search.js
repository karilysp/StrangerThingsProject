import React, { useState } from 'react';


export const Search = (props) => {

    const { posts, setPosts } = props;
    const [searchTerm, setSearchTerm] = useState('');



    const postMatches = (post, searchTerm) => {
        if (post.title.includes(searchTerm) || post.description.includes(searchTerm)) {
            return true;
        } else {
            return false;
        }
    }

    
    const filteredPosts = posts?.filter(post => postMatches(post, searchTerm));
   




    const handleSearch = (event) => {
        event.preventDefault()
        const searchValue = event.target.value;
        setSearchTerm(searchValue)
    }

    



    return (
        <div>

            <input
                value={searchTerm}
                onChange={handleSearch} />
            <button onClick={handleSearch}>SEARCH</button>
            <div>
                {filteredPosts?.map((post) => (

                    <>
                        <p key={post.id}>{post.title}</p>
                        <p key={post.id}>{post.description}</p>
                        <hr></hr>
                    </>

                ))}
            </div>


        </div>
    )
}

export default Search;