import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {

    listPosts = () => {
        const posts = this.props.posts;

        if(posts.length === 0) return null;

        return (
            <React.Fragment >
                {Object.keys(posts).map(key =>(
                    <Post 
                        key = {key}
                        post = {this.props.posts[key]}
                        deletePost = {this.props.deletePost}
                    />
                ))}
            </React.Fragment>
        )
    }

    render() { 
        return ( 
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.listPosts()}
                </tbody>
            </table>
         );
    }
}
export default PostList;