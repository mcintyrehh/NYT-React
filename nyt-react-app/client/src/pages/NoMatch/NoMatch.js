import React from "react";
import { Row, Col } from 'antd';


const NoMatch = () => (
  <container fluid>
    <Row>
      <Col size="md-12">
        <div>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </div>
      </Col>
    </Row>
  </container>
);

export default NoMatch;
