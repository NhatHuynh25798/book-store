import React, { lazy } from 'react';
import { Link, Router, Redirect } from '@reach/router';
import { Result } from 'antd';

const Homepage = lazy(() => import('./views/Homepage'));

const PageNotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Hmm. Chúng tôi gặp khó khăn khi tìm trang web đó."
    extra={<Link to="/">Back Home</Link>}
  />
);

const Routes = () => {
  return (
    <Router
      style={{
        backgroundColor: '--var(tertiary)',
        width: '100%',
        maxWidth: '1920px',
      }}
    >
      <Redirect from="/" to="/trang-chu" noThrow />
      <Homepage path="trang-chu" />
      <PageNotFound path="*" />
    </Router>
  );
};

export default Routes;
