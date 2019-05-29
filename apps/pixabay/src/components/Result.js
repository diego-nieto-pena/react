import React, { Component } from 'react';
import Image from './Image';
import Navigation from './Navigation';

class Result extends Component {

    showImages = () => {

        const images = this.props.images;
        if(images.length===0) return null;

        return (
            <React.Fragment>
                <div id='result' className='col-12 p-5 row'>
                    {this.props.images.map(image => (
                        <Image 
                            key = {image.id}
                            image = {image}
                        />
                    ))}
                </div>
                <Navigation 
                    previousPage = {this.props.previousPage}
                    nextPage = {this.props.nextPage}
                />
            </React.Fragment>
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
         );
    }
}
 
export default Result;