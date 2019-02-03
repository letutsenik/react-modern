import React, { Component } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Dog from "../components/Dog";

const Dogs = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Random dog</title>
        </Helmet>
        <h2>See new random dog</h2>
        <Dog/>
    </Layout>;

export default Dogs;