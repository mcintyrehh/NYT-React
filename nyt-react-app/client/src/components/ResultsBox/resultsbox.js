import React, { Component } from "react";
import { Row, Col } from 'antd';
// import Moment from 'react-moment';
import '../../App.css';
import "./resultsbox.css";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
class ResultsBox extends Component {

    constructor() {
        super();
        this.state = {
            searchResults: ''
        };
    }
    componentDidMount() {
        console.log("ResultsBox");
        console.log(this.state);
    }

    render() {
        
        return (
            <Row type="flex" justify="center">
                <Col span={16} style={{ margin: '0 auto' }}>
                    
                </Col>
            </Row>
        )
    }
};

export default ResultsBox;