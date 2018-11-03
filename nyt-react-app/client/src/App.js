import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import { Layout, Menu, Row, Col, Affix } from 'antd';
import Search from "./pages/Search"
import SearchBox from './components/SearchBox';
import Results from './pages/Results/Results';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor() {
    super();
    
		this.state = {
			top: 20,
      bottom: 10,
      searchResults: []
    };
  }
  setSearch = (result) => {
    console.log(result.response.docs)
    const resultObject = result.response.docs;
    this.setState({searchResults: resultObject})
    console.log("passed state up!!!");
  }
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Row className="logo" type="flex" justify="center">
              <Col span={8}>
                <Link to={'/'}>
                  <div className="logo">New York Times React Scraper</div>
                </Link>
              </Col>
              <Col span={4} style={{ float: 'right' }}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Content style={{ backgroundImage: "url('../images/retro-furnish.png')", height: '100vh' }}>
            <div style={{ minHeight: 280 }}>
              <Row>
                <Col 
                  span={5}
                  className="left-sidebar">
                  <Switch>
                      <Route exact path="/results" component={() => 
                        <Affix offsetTop={this.state.top}>
                          <SearchBox setSearch={this.setSearch}/>
                        </Affix>} />
                      <Route />
                    </Switch>
                </Col>
                  <Col span={14}>
                    <Switch>
                      <Route 
                        exact path="/" 
                        component={()=>
                          <Search setSearch={this.setSearch}></Search>} />
                      <Route 
                        exact path="/results" 
                        component={()=>
                          <Results 
                            results={this.state.searchResults}>
                          </Results>} />
                      <Route component={Search} />
                    </Switch>
                  </Col>
                <Col span={5}></Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
    );
  };
}


export default App;
