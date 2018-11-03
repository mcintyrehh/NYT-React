import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import { Layout, Row, Col, Affix } from 'antd';
import Search from "./pages/Search"
import SearchBox from './components/SearchBox';
import Results from './pages/Results/Results';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor() {
    super();
    
		this.state = {
			top: 50,
      bottom: 10,
      searchResults: []
    };
  }
  setSearch = (result) => {
    console.log(result.response.docs)
    const resultObject = result.response.docs;
    this.setState({searchResults: resultObject})
  }
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <Row className="logo" type="flex" justify="center">
              <Col span={10}>
                <Link to={'/'}>
                  <div className="logo">New York Times React Search</div>
                </Link>
              </Col>
            </Row>
          </Header>
          <Content style={{ backgroundImage: "url('../images/retro-furnish.png')", minHeight: 'calc(100vh - 132.8px)' }}>
            <div style={{ minHeight: 280 }}>
              <Row>
                <Col 
                  span={5}
                  className="left-sidebar">
                  <Switch>
                      <Route exact path="/results" component={() => 
                        <Affix offsetTop={this.state.top}>
                          <SearchBox onSearch={this.setSearch}/>
                        </Affix>} />
                      <Route />
                    </Switch>
                </Col>
                  <Col span={14}>
                    <Switch>
                      <Route 
                        exact path="/" 
                        component={()=>
                          <Search className="search" setSearch={this.setSearch}></Search>} />
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
          <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white'}}>
            Ant Design ©2018 Created by Henry McIntyre
          </Footer>
        </Layout>
      </Router>
    );
  };
}


export default App;
