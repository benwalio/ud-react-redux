import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='ui raised very padded segment'>
                <a className='ui teal inverted segment' href="/">goorillla</a>
                <div className='ui right floated header'>
                    <button className='ui button'><NavLink to="/">home</NavLink></button>
                    <button className='ui button'><NavLink to="/about">about</NavLink></button>
                    <button className='ui button'><NavLink to="/contact">contact</NavLink></button>
                </div>
            </nav>
        )
    }
}
