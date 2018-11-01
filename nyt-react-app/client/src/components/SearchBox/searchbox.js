import React, { Component } from "react";
import { Row, Col, Form, Input, Button } from 'antd';
import '../../App.css';
import "./searchbox.css";

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'vertical',
        };
    }

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
                            <Button type="primary">Search</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
};

export default SearchBox;