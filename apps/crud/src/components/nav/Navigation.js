import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return ( 
        <nav className='col-12 col-md-8'>
            <Link to={'/'}>All Posts</Link>
            <Link to={'/create'}>Create Post</Link>
        </nav>
     );
}
 
export default Navigation;