import React, { Component } from "react";
import { Row, Col, Affix } from 'antd';
import SearchBox from "../../components/SearchBox";
import '../../components/Container/container.css'
// import API from "../../utils/API";
// import { Link } from "react-router-dom";



class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            results: '',
            top: 150
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
                        <Col span={18}>
                            <div className="title">Search New York Times Articles</div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={24} className="searchBox">
                            <Affix offsetTop={this.state.top}>
                                <SearchBox
                                    setSearch={this.props.setSearch}
                                    onSearch={this.handleSearch}>
                                </SearchBox>
                            </Affix>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Search;
