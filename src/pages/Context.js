import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Helmet from "react-helmet";

export const OuterContext = React.createContext({ themeMode: "light" });
export const InnerContext = React.createContext({ themeMode: "light" });

const Context = () => {
    const [ theme, setTheme ] = useState({ themeMode: "light" });
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Context</title>
            </Helmet>
            <OuterContext.Provider value={{ themeMode: "light" }}>
                <InnerContext.Provider value={{ themeMode: "dark" }}>
                    <main>
                        <h2>Context</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button />
                        </div>
                    </main>
                </InnerContext.Provider>
            </OuterContext.Provider>
        </Layout>
    );
};

export default Context;
