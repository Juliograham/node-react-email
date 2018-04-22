import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" className="brand-logo left">ReactMail</a>
            <ul className="right">
                <li><a>Login</a></li>
            </ul>
            </div>
        </nav>
        );
    }
}

export default Header;