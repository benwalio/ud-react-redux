import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        console.log(this.props);
        return (
            <nav className='ui raised very padded segment'>
                <a className='ui teal inverted segment' href="/">goorillla</a>
                <div className='ui right floated header'>
                    <button className='ui button'><Link to="/">home</Link></button>
                    <button className='ui button'><Link to="/about">about</Link></button>
                    <button className='ui button'><Link to="/contact">contact</Link></button>
                </div>
            </nav>
        )
    }
}
