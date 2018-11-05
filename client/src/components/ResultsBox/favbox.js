import React, { Component } from "react";
import { Row, Col } from 'antd';
import {FavCard} from '../Card'
import API from "../../utils/API";
import '../../App.css';
import "./resultsbox.css";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();
class FavBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favResults: '',
            top: 50
        };
    }
    componentDidMount() {
        console.log("FavBox");
        console.log(this.props.results);
        const favResults = this.props.results
        this.setState({favResults})
    }
    loadFavs() {
        API.getFavs()
            .then(res => {
                const favObj = res.data;
                this.setState({ favResults: favObj })
            }
            )
            .catch(err => console.log(err));
    };
    reload() {
        this.props.reload();
    }
    deleteArticle = (id) => {
        console.log(id);
        API.deleteArticle(id)
            .then(
                res=> {
                    console.log(res)
                    this.loadFavs()
                })
            .catch(err => console.log(err));
    }
    render() {
        console.log('in fav box')
        return (
            <Row type="flex" justify="center">
                <Col span={24}  style={{marginTop: '30px'}}>
                    {this.state.favResults && this.state.favResults.map((article)=> <FavCard onClick={() => this.deleteArticle(article._id)} article={article} key={article._id}></FavCard>)}
                </Col>
            </Row>
        )
    }
};

export default FavBox;