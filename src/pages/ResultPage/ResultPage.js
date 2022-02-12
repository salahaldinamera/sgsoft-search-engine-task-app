import React, { Component } from 'react';

import classes from './ResultPage.module.css';

import { withRouter } from 'react-router-dom';
import SearchField from '../../components/SearchField/SearchField';

import logo from '../../assets/smartglobe_search_logo.png';
import PageCard from '../../components/Cards/PageCard/PageCard';
import NoResultsCard from '../../components/Cards/NoResultsCard/NoResultsCard';
import ImageCard from '../../components/Cards/ImageCard/ImageCard';


import axios from '../../axios';

class ResultPage extends Component {
    state = {
        resources: [],
    };

    tags = [
        {keyword:"test"},
        {keyword:"test1"},
    ];


    componentDidMount(){
        axios.get("/search/resources?keyword="+this.props.match.params.keyword).then( res => {
            this.setState({resources: res.data});
        }).catch(err => {
            console.log(err);
        });
    }

    

    render() {

        const imageClick = () => {
            this.props.history.push("/");
        }

        console.log(this.state.resources);
        
        let element;

        if(this.state.resources.length!==0){
            element = this.state.resources.map((resource, i) => {
                if(resource.type==="html_page")
                    return <PageCard title={resource.title} link={resource.link} tags={resource.tags} />;
                else
                    return <ImageCard title = {resource.title} link={resource.link} tags={resource.tags} />
            })
        }else{
            element = <NoResultsCard keyword={this.props.match.params.keyword}/>;
        }

        return (
            <div className={classes.searchPageMainContainer}>
                <div>
                    <img src={logo} alt="Search-Logo" width="65%" onClick={() => imageClick()}/>
                    <SearchField searchQuery={this.props.match.params.keyword} />
                    <div className={classes.cardsContainer}>
                        {element}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ResultPage);