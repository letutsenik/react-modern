import React from "react";
import './Football.css';
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import { Form } from "../components/Form/Form"

const Index = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home page</title>
        </Helmet>
        <h2>Home</h2>
        <Form />
    </Layout>;

export default Index;
