import React, { useState, useEffect } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import Header from "./Header";
import Profile from "./Profile";
import Login from "./Login";
import { getUserById } from "../api"

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

    const [loggedIn, setLoggedIn] = useState(false);

    const loadUserData = async (email) =>  
        getUserById(email).then(user => setProfile(user));

    const logOut = () => {
        Cookies.remove('auth');
        Cookies.remove('email');
        setProfile(null);
        setLoggedIn(false);
    }    

    useEffect(() => {
        const lastLoginState = !!Cookies.get('auth');
        setLoggedIn(lastLoginState)
        if (lastLoginState) {
            loadUserData(Cookies.get('email'))
                .catch(e => {
                    console.error(e);
                    setOpenLogin(true);
                    setLoggedIn(false);
                })
        } else {
            setOpenLogin(true);
        }
    }, [loggedIn]);

    const classes = styles();
    return (
    <Paper className={classes.root}>
        <Header 
            openCreateProfile={setOpenProfile} 
            openLogin={setOpenLogin} 
            openEditProfile={setOpenEdit} 
            isEdit={!!profile}
            loggedIn={loggedIn}
            logOut={logOut}/>
        {children}
        { openLogin && <Login open={openLogin} setOpen={setOpenLogin} setProfile={loadUserData} setLoggedIn={setLoggedIn}/>}
        { openEdit && (<Profile key="edit" open={openEdit} profile={profile} setOpen={setOpenEdit} reload={reload}/>) }
        { openProfile && (<Profile key="create" open={openProfile} setOpen={setOpenProfile} reload={reload}/>) }
    </Paper>);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    reload: PropTypes.func.isRequired,
}

export default Layout;