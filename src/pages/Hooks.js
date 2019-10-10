import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

import NotificationBox from '../components/NotificationBox';

const Hooks = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hooks</title>
        </Helmet>
        <h2>Hooks</h2>
        <NotificationBox />
    </Layout>;

export default Hooks;
