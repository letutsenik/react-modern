import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Football from "./pages/Football";
import Dogs from "./pages/Dogs";
import Foods from "./pages/Foods";
import Hooks from "./pages/Hooks";
import Context from "./pages/Context";

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/football/" component={Football} />
            <Route path="/dogs/" component={Dogs} />
            <Route path="/foods/" component={Foods} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/context" component={Context} />
        </div>
    </Router>
);

export default AppRouter;
