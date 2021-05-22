import React from "react";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
    <Paper>
        <Header />
        {children}
    </Paper>);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;