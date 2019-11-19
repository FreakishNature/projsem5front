import React from 'react';
import '../../style/App.css';
import SearchBar from '../components/SearchBar';

class Header extends React.Component{
    render(){
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <SearchBar/>
                </div>
            </div>
        );
    }
}

export default Header;