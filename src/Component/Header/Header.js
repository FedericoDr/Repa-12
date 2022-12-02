import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div className='Contenedor'>
        <h1 className='Titulo-N'>To Do | Matea</h1>
        <li>
        <Link className='Links' to={'/Home'}>Inicio</Link>
        <Link className='Links' to={'/Login'}>Login</Link>
		<Link className='Links' to={'/Register'}>Register</Link>
        </li>
      </div>
    )
  }
}

