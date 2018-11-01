import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import './App.css';
import { Layout, Menu, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Row className="logo" type="flex" justify="center">
              <Col span={8}>
                <div className="logo">New York Times React Scraper</div>
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
              <Switch>
                <Route exact path="/" component={Search} />
                {/* <Route exact path="/books" component={Books} />
                <Route exact path="/books/:id" component={Detail} /> */}
                <Route component={NoMatch} />
              </Switch>

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
