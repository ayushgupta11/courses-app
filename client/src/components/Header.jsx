import React from 'react'
import logo from '../logo.jpeg';

export default function Header() {
    return (
        <div className='header' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: '#fff', opacity: 0.5 }}>
            <img src={logo} style={{ height: 60 }} alt="logo" />
            <h1 style={{ fontSize: 50 }}>Electronics Wing</h1>
            <img src={logo} style={{ height: 60 }} alt="logo" />
        </div>
    )
}
