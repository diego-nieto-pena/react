import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

class Post extends Component {

    confirmDelete = () => {
        const {id} = this.props.post;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {

                this.props.deletePost(id);

                Swal.fire(
                    'Deleted!',
                    'Your post has been deleted.',
                    'success'
                )
            }
          })
    }

    render() {

        const {id, title} = this.props.post;

        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className='btn btn-primary'>Details</Link>
                    <Link to={`/edit/${id}`} className='btn btn-warning'>Edit</Link>
                    <button type='button' className='btn btn-danger' onClick={this.confirmDelete}>Borrar</button>
                </td>
            </tr>
         );
    }
}
 
export default Post;