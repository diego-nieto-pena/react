import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import Header from './Header';
import Navigation from './nav/Navigation';
import Posts from './post/Posts';
import SinglePost from './post/SinglePost';
import EditPost from './post/EditPost';
import Form from './form/Form';

class Router extends Component {
    state = { 
        posts : []
    }

    componentDidMount() {
        this.getAllPosts();
    }

    getAllPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response =>{
                this.setState({
                    posts : response.data
                })
            })
    }

    deletePost = (postId) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if(response.status === 200) {
                    const posts = [...this.state.posts];

                    let result = posts.filter(post => (
                        post.id !== postId
                    ));

                    this.setState({
                        posts : result
                    })
                }
            })
    }

    createPost = (data) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
            .then(response => {
                if(response.status === 201) {

                    Swal.fire({
                        title: 'Post created!',
                        width: 600,
                        padding: '3em',
                        background: '#fff url(/images/w.jpg)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/magic.gif")
                          center left
                          no-repeat
                        `
                    })

                    let postId = {id: response.data.id};
                    const newPost = Object.assign({}, response.data, postId);
                    console.log(newPost);
                    this.setState(prevState => ({
                        posts : [...prevState.posts, newPost]
                    }))
                }
            })
    }

    editPostFunc = (postData) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${postData.id}`, postData)
                .then(response => {
                    if(response.status === 200) {

                        Swal.fire ({
                            title : 'Post Updated!',
                            width: 600,
                            padding: '3em'
                        })

                        let postId = response.data.id;
                        const posts = [...this.state.posts]

                        const editedPost = posts.findIndex(post => postId === post.id);

                        posts[editedPost] = postData;

                        this.setState({
                            posts
                        })
                    }
                })
    }

    render() { 
        return ( 
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header/>
                        <Navigation />
                        <Switch>
                            <Route exact path='/' render={ () => {
                                return (
                                    <Posts 
                                        posts = {this.state.posts}
                                        deletePost = {this.deletePost}
                                    />
                                )
                            }} />
                            <Route exact path='/post/:postId' render={ (props) => {
                                let idPost = props.location.pathname.replace('/post/', '');

                                const posts = this.state.posts;

                                let filterPost;

                                filterPost = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))

                                return (
                                    <SinglePost
                                        post = {filterPost[0]}
                                    />
                                )
                            }} />

                            <Route exact path='/create' render={ () => {
                                return (
                                    <Form
                                        createPost = {this.createPost}
                                    />
                                )
                            }}/>

                            <Route exact path="/edit/:postId" render={ (props) => {
                                        let idPost = props.location.pathname.replace('/edit/', '');

                                        const posts = this.state.posts;

                                        let filtro;
                                        filtro = posts.filter(post => (
                                             post.id === Number(idPost)
                                        ))
                                        return(
                                             <EditPost
                                                  post={filtro[0]}
                                                  editPostFunc={this.editPostFunc}
                                             />
                                        )
                                   } }
                                   />

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;