
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
function Header() {
    return (
        <header class="site-header">
            <div class="site-identity">
                <h1><Link to="/">Site Name</Link></h1>
            </div>
            <nav class="site-navigation">
                <ul class="nav">
                    <li><NavLink to="/" end>About</NavLink></li>
                    <li><NavLink to="news">News</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><NavLink to="formlogin">Form</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;