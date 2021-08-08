import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav pl-md-5 mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
