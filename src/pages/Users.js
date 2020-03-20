import React, { useState, useRef, useEffect } from "react";
import './Football.css';
import Layout from "../components/Layout";
import Helmet from "react-helmet";

import './Users.css';

import UserList from "../components/UserList";

const Users = () =>
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Users</title>
    </Helmet>
    <main className="main-container">
      <div className="left-column"></div>
      <div className="right-column">
        <div className="filters-bar">Filters bar</div>
        <Container>
          <UserList />
        </Container>
      </div>
    </main>
  </Layout>;

export default Users;


const Container = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
  }, []);
  const ref = useRef(null);
  const extendedChildren = React.Children.map(children,
    (child, index) => {
      return React.cloneElement(child, {
        height,
        width
      });
    });
  return (
    <div style={{ height: 'calc(100% - 100px)' }} ref={ref}>{extendedChildren}</div>
  );
};
