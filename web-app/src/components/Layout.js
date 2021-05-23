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
    const [openEdit, setOpenEdit] = useState(false);
    const [profile, setProfile] = useState(null);

    const classes = styles();
    return (
    <Paper className={classes.root}>
        <Header 
            openCreateProfile={setOpenProfile} 
            openLogin={setOpenLogin} 
            openEditProfile={setOpenEdit} 
            isEdit={!!profile}/>
        {children}
        <Login open={openLogin} setOpen={setOpenLogin} setProfile={setProfile}/>
        <Profile open={openProfile} setOpen={setOpenProfile} reload={reload}/>
        <Profile open={openEdit} profile={profile} setOpen={setOpenEdit} reload={reload}/>
    </Paper>);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    reload: PropTypes.func.isRequired,
}

export default Layout;