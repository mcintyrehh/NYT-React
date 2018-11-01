import React, { Component } from "react";
import { Row, Col, Form, Input, Button } from 'antd';
import '../../App.css';
import "./searchbox.css";
import API from "../../utils/API";

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'vertical',
            search: "",
            startYear: 1990,
            endYear: 2000
        };
    }
    componentDidMount() {
        this.searchArticles("JavaScript");
      }
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
      };
    searchArticles = query => {
        API.searchArticles(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };
    render() {
        const FormItem = Form.Item
        const { formLayout } = this.state;

        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
        } : null;
        
        return (
            <Row type="flex" justify="center">
                <Col span={16} style={{margin: '0 auto'}}>
                    <Form layout={'vertical'}>
                        <div
                        style={{ color: 'white' }}
                        >Topic </div>
                        <FormItem>
                            <Input placeholder="input placeholder" />
                        </FormItem>
                        <div style={{ color: 'white' }}>Start Year</div>
                        <FormItem>
                            <Input placeholder="input placeholder" />
                        </FormItem>
                        <div style={{ color: 'white' }}>End Year</div>
                        <FormItem>
                            <Input placeholder="input placeholder" />
                        </FormItem>
                        <FormItem {...buttonItemLayout}>
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