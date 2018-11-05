import React, { Component } from "react";
import { Row, Col } from 'antd';
import {Card} from '../Card'
import API from "../../utils/API";
import '../../App.css';
import "./resultsbox.css";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();
class ResultsBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: '',
            top: 50
        };
    }
    componentDidMount() {
        console.log("ResultsBox");
        console.log(this.props.results);
        const searchResults = this.props.results
        this.setState({searchResults})
    }
    handleClick = () => {
        const setOpposite = (this.state.savedState === this.unsaved) ? this.unsaved : this.saved;
        this.setState({savedState: setOpposite}) 
    }
    saveArticle = (articleObj) => {
        console.log(articleObj);
        const article = {
            title: articleObj.headline.main,
            date: articleObj.pub_date,
            url: articleObj.web_url,
            snippet: articleObj.snippet
        }
        API.saveArticle(article)
            .then(res=> console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={24}  style={{marginTop: '30px'}}>
                    {this.state.searchResults && this.state.searchResults.map((article)=> <Card onClick={() => this.saveArticle(article)} article={article} key={article._id}></Card>)}
                </Col>
            </Row>
        )
    }
};

export default ResultsBox;