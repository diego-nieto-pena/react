import React from 'react';

const Image = (props) => {

    const {largeImageURL, likes, previewURL, comments, tags, views} = props.image;

    return ( 
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img className='card-img-top' src={previewURL} alt={tags} />
                <div className='card-body'>
                    <p className='card-text'>{likes} Likes</p>
                    <p className='card-text'>{views} Views</p>
                    <p className='card-text'>{comments} Comments</p>

                    <a href={largeImageURL} target='_blank' className='btn btn-primary btn-block'> View Image</a>
                </div>
            </div>
            
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <p>{tags}</p>
        </div>
    );
}
 
export default Image;