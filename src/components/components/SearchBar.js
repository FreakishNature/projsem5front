import React from 'react';
import '../../style/App.css';
import '../../style/SearchBar.css';

class SearchBar extends React.Component{
    render(){
        return (
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search projects.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        );
    }
}

export default SearchBar;