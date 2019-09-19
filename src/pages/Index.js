import React from "react";
import './Football.css';
import Layout from "../components/Layout";
import Helmet from "react-helmet";

const Index = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home page</title>
        </Helmet>
        <h2>Home</h2>
    </Layout>;

export default Index;
