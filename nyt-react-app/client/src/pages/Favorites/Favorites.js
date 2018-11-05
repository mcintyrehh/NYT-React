import React, { Component } from "react";
import FavBox from "../../components/ResultsBox/favbox";
import { Row, Col, Icon } from 'antd';
import API from "../../utils/API";
// import { Link } from "react-router-dom";



class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
    }
    componentDidUpdate() {

    };
    componentDidMount() {
        console.log("in Favorites.js");
        this.loadFavs()
    };
    loadFavs() {
        API.getFavs()
            .then(res => {
                const favObj = res.data;
                this.setState({ favorites: favObj })
                console.log(res);
            }
            )
            .catch(err => console.log(err));
    };
    render() {
        console.log(this.state);
        if (this.state.favorites.length>1) {
            return (
                <Row type="flex" justify="center">
                    <Col span={16} className="title">
                        <Row type="flex" justify="center">
                            <Col span={16}>
                                <div>Favorite Articles</div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <FavBox results={this.state.favorites}></FavBox>
                        </Row>
                    </Col>
                </Row>


            );
        }
        else {
            return (
                <Row type="flex" justify="center">
                    <Col span={16} className="title">
                        <Row type="flex" justify="center">
                            <Col span={16}>
                                <div>Favorite Articles</div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Icon type="loading"></Icon>
                        </Row>
                    </Col>
                </Row>
            );
        }
    }
}

export default Favorites;
