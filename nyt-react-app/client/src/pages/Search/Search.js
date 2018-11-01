import React, { Component } from "react";
import Container from "../../components/Container"
import SearchBox from "../../components/SearchBox"
// import API from "../../utils/API";
// import { Link } from "react-router-dom";



class Search extends Component {

    render() {
        return (
            <Container title={'Search New York Times Articles'}>
                <SearchBox></SearchBox>
            </Container>
        );
    }
}

export default Search;
