import React from 'react';
import { Row, Col } from 'antd';

import styles from './style.module.css';

const FooterClient = () => {
  return (
    <Row>
      <Col xs={{ span: 24 }}>Footer</Col>
      <Col span={8} className={styles.footerLogo}>
        <Row justify="center">
          <h1 className={styles.specialHeading}>Book Store</h1>
        </Row>
      </Col>
      <Col span={8}></Col>
      <Col span={8}></Col>s
    </Row>
  );
};
export default FooterClient;
