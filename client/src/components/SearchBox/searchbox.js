import React, { Component } from "react";
import { Row, Col, Form, Input, Button, DatePicker } from 'antd';
// import moment from 'moment';
// import Moment from 'react-moment';
import '../../App.css';
import "./searchbox.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            startDate: "",
            endDate: "",
            enabled: false,
            searchResult: []
        };
    }
    componentDidMount() {
        // console.log(moment().format('LLLL'));
        // const now = moment();
        // console.log(moment().format('YYYY/MM/DD'))
    }
    handleFormSubmit = (event) => {
        // event.preventDefault();
        const queryObject = {
            search: this.state.search,
            startYear: this.state.startDate,
            endYear: this.state.endDate
        }
        console.log(queryObject)
        this.searchArticles(queryObject);
        history.push('/results');
    };
    searchArticles = query => {
        API.searchArticles(query)
            .then(res => this.props.onSearch(res.data))
            .catch(err => console.log(err));
    };
    setSearchTop = (res) => {
        this.props.setSearch(res);
    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    onDateChange = (date) => {
        // ternary operators for: if there is date data, set the state to the formated date
        // if not, return an empty string, important in case the date range is cleared it won't break everything
        const startDateString = (date[0]) ? date[0].format('YYYYMMDD') : '';
        const endDateString = (date[1]) ? date[1].format('YYYYMMDD') : '';
        this.setState({ startDate: startDateString });
        this.setState({ endDate: endDateString })
    };
    render() {
        const FormItem = Form.Item
        const dateFormat = 'YYYY/MM/DD';
        const { RangePicker } = DatePicker;
        // setting a var for today's date, formatted for the range picker, for future implementation
        // const now = moment().format('YYYY/MM/DD');
        return (
            <Row type="flex" className="search-box" justify="center">
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
                            disabled={this.state.enabled}
                            onChange={this.onDateChange}
                            // defaultValue={[moment(dateFormat), moment(now, dateFormat)]}
                            format={dateFormat}
                        />
                        <FormItem>
                            <Link to="/results/">
                                <Button
                                    type="primary"
                                    onClick={this.handleFormSubmit}>
                                    Search
                                </Button>
                            </Link>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
};

export default SearchBox;