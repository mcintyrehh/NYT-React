import React from "react";
import { Row, Col } from 'antd';
import '../../App.css';
import "./container.css";

const Container = props => (
    <Row type="flex" justify="center">
        <Col span={16} className="title">
            <Row type="flex" justify="center">
                <Col span={16}>
                    <div>{props.title}</div>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={10} className="searchBox">
                    {props.children}
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Container;