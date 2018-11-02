import React, { Component } from "react";
import { Row, Col, Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
// import Moment from 'react-moment';
import '../../App.css';
import "./searchbox.css";
import API from "../../utils/API";

class SearchBox extends Component {
    
    constructor() {
        super();
        this.state = {
            search: "",
            startYear: "",
            endYear: ""
        };
    }
    componentDidMount() {
        console.log(moment().format('LLLL'));
        const now = moment();
        console.log(moment().format('YYYY/MM/DD'))
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        const queryObject = {
            search: this.state.search,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }
        console.log(queryObject)
        this.searchArticles(queryObject);
    };
    searchArticles = query => {
        API.searchArticles(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };
    render() {
        const FormItem = Form.Item
        const dateFormat = 'YYYY/MM/DD';
        const { RangePicker } = DatePicker;
        return (
            <Row type="flex" justify="center">
                <Col span={16} style={{ margin: '0 auto' }}>
                    <Form layout={'vertical'}>
                        <div
                            style={{ color: 'white' }}
                        >Topic </div>
                        <FormItem className="form-item">
                            <Input
                                placeholder="search query"
                                name="search"
                                onChange={this.handleInputChange}
                            />
                        </FormItem>
                        <div style={{ color: 'white' }}>Search Range</div>
                        <RangePicker
                            className="form-item"
                            defaultValue={[moment('2018/01/08', dateFormat), moment('YYYY/MM/DD', dateFormat)]}
                            format={dateFormat}
                            />
                        <FormItem>
                            <Button
                                type="primary"
                                onClick={this.handleFormSubmit}>Search</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
};

export default SearchBox;