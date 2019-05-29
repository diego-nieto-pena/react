import React, { Component } from 'react';

class Search extends Component {

    searchTermRef = React.createRef();

    searchImage = (e) => {
        e.preventDefault();

        const term = this.searchTermRef.current.value;
        this.props.searchImage(term);
    } 

    render() { 
        return ( 
            <form onSubmit={this.searchImage}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input className='form-control form-control-lg' ref={this.searchTermRef} type='text' placeholder='Search for images'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input type='submit' className='btn btn-lg btn-danger btn-block' value='Search'/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Search;