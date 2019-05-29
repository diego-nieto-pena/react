import React from 'react';

const Navigation = (props) => {
    return ( 
        <div className='row py-5'>
            <button onClick={props.previousPage} type='button' className='btn btn-info mr-1'>Previous &larr;</button>
            <button onClick={props.nextPage} type='button' className='btn btn-info mr'>Next &rarr;</button>
        </div>
     );
}
 
export default Navigation;