import React, { Component } from "react";
import ResultsBox from "../../components/ResultsBox";
import { Row, Col } from 'antd';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";



class Results extends Component {
    constructor(props) {
        super(props);
            this.state = {
                
        };
      } 
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={16} className="title">
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <div>Search Results</div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <ResultsBox results={this.props.results}></ResultsBox>
                    </Row>
                </Col>
            </Row>

        );
    }
}

export default Results;
