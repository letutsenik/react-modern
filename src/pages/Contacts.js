import React from "react";
import Layout from "../components/Layout";
import {Helmet} from "react-helmet";

const Contacts = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contacts</title>
        </Helmet>
        <h2>Contacts</h2>
    </Layout>;

export default Contacts;