import React, { useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Header from "./Header";
import Profile from "./Profile";
import Login from "./Login";

const styles = makeStyles(() => ({
  root: {
      height: '100%'
  } 
}));

const Layout = ({ reload, children }) => {
    const [openLogin, setOpenLogin] = useState(false)
    const [openProfile, setOpenProfile] = useState(false);
    const classes = styles();
    return (
    <Paper className={classes.root}>
        <Header onCreateProfile={setOpenProfile} onLogin={setOpenLogin}/>
        {children}
        <Login open={openLogin} setOpen={setOpenLogin}/>
        <Profile open={openProfile} setOpen={setOpenProfile} reload={reload}/>
    </Paper>);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    reload: PropTypes.func.isRequired,
}

export default Layout;