import React, { Component } from 'react';

class Form extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    createPost = (e) => {
        e.preventDefault();

        const data = {
            title : this.titleRef.current.value,
            body : this.contentRef.current.value, 
            userId : 1
        }

        this.props.createPost(data);
    }

    render() { 
        return ( 
            <form onSubmit={this.createPost} className='col-8'>
                <legend className='text-center'>Create New Post</legend>
                <div className='form-group'>
                    <label>Post Title:</label>
                    <input type='text' ref={this.titleRef} className='form-control' placeholder='Post Title' />
                </div>
                <div className='form-group'>
                    <label>Post Content:</label>
                    <textarea className='form-control' ref={this.contentRef} placeholder='Content ...'></textarea>
                </div>

                <button type='submit' className='btn btn-primary'>Create</button>
            </form>
        );
    }
}
 
export default Form;