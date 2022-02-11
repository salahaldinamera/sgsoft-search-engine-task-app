import React, { Component } from 'react';
import SearchField from '../../components/SearchField/SearchField';

import classes from './SearchPage.module.css';

import logo from '../../assets/smartglobe_search_logo.png';

class SearchPage extends Component {

    render() {
        return (
            <div className={classes.SearchPageMainContainer}>
                <div>
                    <img src={logo} alt="Search-Logo" width="65%"/>
                    <SearchField/>
                </div>
            </div>
        );
    }
}

export default SearchPage;