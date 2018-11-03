import { Row, Col, Icon } from 'antd';
import CardBtn from '../CardBtn'
import './Card.css'
// import "../CardBtn.css";
import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    // const unsaved = <i className="far fa-star mx-auto fav btn"/>
    // const saved = <i className="fas fa-star mx-auto fav btn"/>
    super();
    this.state = {

    };
  }
  handleClick = (e, data) => {
    console.log(e.target.value)
    console.log(e, data);
  }
  render(props) {

    return (
      <Row className="card-div">
        <Col span={7} className="side-info-holder">
          <div>
              <img alt={`pic for "${this.props.article.title}" article`} src="https://pmcdeadline2.files.wordpress.com/2016/10/the-new-york-times-logo-featured.jpg?w=446&h=299&crop=1"></img>
          </div>
          {/* on clicking this button, it will run the function displayRealNews() and pass UP the object of the fake news article */}
          <div
            className="fav"
            value={this.props.article._id}
            fav-saved="false">
            <button className="card-btn"
              onClick={this.props.onClick}
            ><Icon type="star"></Icon></button>
          </div>
        </Col>
        <Col span={15}>
          <div className="article-info">
            <h3 className="card-title">
              <a target="_blank" href={this.props.article.web_url}>{this.props.article.headline.main}</a>
            </h3>
            <div className="card-text p-0 summary">{this.props.article.snippet}</div>
          </div>
        </Col>
      </Row>
    )
  };
}
export { Card };
