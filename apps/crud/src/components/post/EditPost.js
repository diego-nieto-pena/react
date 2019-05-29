import React, { Component } from 'react';

class EditPost extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    editPost = (e) => {
        e.preventDefault();

        const data = {
            title : this.titleRef.current.value,
            body : this.contentRef.current.value, 
            userId : 1, 
            id : this.props.post.id
        }

        this.props.editPostFunc(data);
    }

    loadForm = () => {

        if(!this.props.post) return null;

        const {title, body} = this.props.post;

        return (
            <form onSubmit={this.editPost} className='col-8'>
                <legend className='text-center'>Edit Post</legend>
                <div className='form-group'>
                    <label>Post Title:</label>
                    <input type='text' ref={this.titleRef} className='form-control' defaultValue={title}/>
                </div>
                <div className='form-group'>
                    <label>Post Content:</label>
                    <textarea className='form-control' ref={this.contentRef} defaultValue={body}></textarea>
                </div>

                <button type='submit' className='btn btn-primary'>Save</button>
            </form>
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>
        );
    }
}
 
export default EditPost;