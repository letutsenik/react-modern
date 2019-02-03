import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const About = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About Us</title>
        </Helmet>
        <h2>About</h2>
    </Layout>;

export default About;