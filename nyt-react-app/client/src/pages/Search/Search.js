import React, { Component } from "react";
import Container from "../../components/Container";
import { Row, Col } from 'antd';
import SearchBox from "../../components/SearchBox";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";



class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            results: '',
        }
    }
    handleSearch = (resultObj) => {
        this.props.setSearch(resultObj);
    }
    onChange = (e) => {
        console.log(this.state);
        console.log("test" + e)
    }
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={16} className="title">
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <div>Search New York Times Articles</div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={10} className="searchBox">
                            <SearchBox
                                setSearch={this.props.setSearch}
                                onSearch={this.handleSearch}
                                onChange={this.onChange}>
                            </SearchBox>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Search;
