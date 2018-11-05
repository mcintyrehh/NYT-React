import React, { Component } from "react";
import { Row, Col, Icon } from 'antd';
import '../../App.css';
import "./FavLink.css";
import { Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();
class FavLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (
            <Row>
                <Col className="fav-div" span={16}>
                    <div>Favorite</div>
                    <div>
                        <Link onClick={this.loadFavs} to="/favorites/">
                            <Icon type="star" className="gold"></Icon>
                        </Link>
                    </div>
                    <div>Articles</div>
                </Col>
            </Row>
        )
    }
}

export default FavLink;
