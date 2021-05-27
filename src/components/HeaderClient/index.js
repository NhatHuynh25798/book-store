import React from 'react';
import { Row, Col, Menu, Dropdown, Badge } from 'antd';
import {
  DownOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from '@reach/router';

import styles from './style.module.css';

const StyledSpan = styled.span`
  &:hover {
    color: var(--secondary);
  }
`;

const HeaderClient = () => {
  const menus = {
    left: [
      {
        name: 'Page',
        child: [
          {
            id: 1,
            name: 'Contact us',
            link: '/',
          },
          {
            id: 2,
            name: 'About us',
            link: '/',
          },
          {
            id: 3,
            name: 'Blog',
            link: '/',
          },
        ],
      },
    ],
  };

  const DropdownMenu = (props) => {
    const { name, data = [] } = props;

    const menu = (
      <Menu className={styles.subMenu}>
        {data?.map((item) => (
          <Menu.Item className={styles.subMenuItem} key={item?.id}>
            {item?.onClick ? (
              <StyledSpan onClick={item?.onClick}>{item?.name}</StyledSpan>
            ) : (
              <Link to={`${item?.link}`}>{item?.name}</Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <Link to="/" className={styles.menuItem}>
          {name}&nbsp;
          <DownOutlined style={{ fontSize: '0.65rem' }} />
        </Link>
      </Dropdown>
    );
  };

  return (
    <Row style={{ width: '100%' }}>
      <Col span={24}>
        <Row justify="center">
          {/* for mobile */}
          <Col xs={24} sm={24}></Col>

          {/* for desktop */}
          <Col md={24}>
            <Row justify="space-around" gutter={[16, 0]}>
              <Col span={9}>
                <Row justify="end" align="middle" className={styles.menu}>
                  <Link to="/" className={styles.menuItem}>
                    Home
                  </Link>
                  {menus?.left?.map((it, idx) => (
                    <DropdownMenu key={idx} name={it?.name} data={it?.child} />
                  ))}
                  <Link to="/" className={styles.menuItem}>
                    Blog
                  </Link>
                </Row>
              </Col>
              <Col span={6} className={styles.headerLogo}>
                <Row justify="center">
                  <h1>Book Store</h1>
                </Row>
              </Col>
              <Col span={9}>
                <Row justify="start" align="middle" className={styles.menu}>
                  <Link to="/" className={styles.menuItem}>
                    Shop
                  </Link>
                  <Col className={styles.menuItem}>
                    <Link to="/search">
                      <SearchOutlined style={{ fontSize: '1.2rem' }} />
                    </Link>
                  </Col>
                  <Col className={styles.menuItem}>
                    <Link to="/cart">
                      <Badge
                        count={2}
                        size="small"
                        style={{ backgroundColor: '#faab9f' }}
                      >
                        <Link to="/cart">
                          <ShoppingOutlined style={{ fontSize: '1.2rem' }} />
                        </Link>
                      </Badge>
                    </Link>
                  </Col>
                  <Col className={styles.menuItem}>
                    <Link to="/login">
                      <UserOutlined style={{ fontSize: '1.2rem' }} />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default HeaderClient;
