import React, { Component } from 'react';
import Producto from './Producto';
import  './../../css/Productos.css';
import Buscador from './../buscador/Buscador';

class Productos extends Component {

    render() { 
        return ( 
            <div className='productos'>
                <h2>Nuestros Productos</h2>
                <Buscador
                    realizarBusqueda={this.props.realizarBusqueda}
                />
                <ul className='lista-productos'>
                    {Object.keys(this.props.productos).map( key => (
                        <Producto 
                            key = {key}
                            informacion = {this.props.productos[key]}
                        />
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default Productos;