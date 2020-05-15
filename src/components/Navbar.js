import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='ui raised very padded segment'>
                <a className='ui teal inverted segment' href="/">goorillla</a>
                <div className='ui right floated header'>
                    <button className='ui button'><a href="/">home</a></button>
                    <button className='ui button'><a href="/about">about</a></button>
                    <button className='ui button'><a href="/contact">contact</a></button>
                </div>
            </nav>
        )
    }
}
