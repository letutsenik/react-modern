import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

import { Tabs, Tab } from "react-bootstrap";
import useQueryString from "../hooks/useQueryString";

const About = () => {
    const [value, onSetValue] = useQueryString("tab", "water");
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
            </Helmet>
            <h2>Foods</h2>
            <Tabs activeKey={value} onSelect={onSetValue}>
                <Tab eventKey="water" title="Water" />
                <Tab eventKey="coffe" title="Coffe" />
                <Tab eventKey="tea" title="Tea" />
            </Tabs>
        </Layout>
    );
};


export default About;
