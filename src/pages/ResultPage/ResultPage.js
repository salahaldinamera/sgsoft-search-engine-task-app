import React, { Component } from 'react';

import classes from './ResultPage.module.css';

import { withRouter } from 'react-router-dom';
import SearchField from '../../components/SearchField/SearchField';

import logo from '../../assets/smartglobe_search_logo.png';

class ResultPage extends Component {

    componentDidMount(){
        console.log(this.props.match);
    }
    
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

export default withRouter(ResultPage);