import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const Header = ({ openLogin, openCreateProfile, openEditProfile, isEdit, loggedIn, logOut }) => {
    return (<AppBar position="static">
        <Toolbar>
            <div>
                { !loggedIn && <Button variant="outlined" onClick={() => openLogin(true)}>Login</Button> }
                { loggedIn && <Button variant="outlined" onClick={logOut}>Logout</Button> }
                <Button variant="outlined" onClick={() => openCreateProfile(true)}>Create an account</Button>
                {
                    isEdit && <Button variant="outlined" onClick={() => openEditProfile(true)}>Edit your account</Button>
                }
            </div>
        </Toolbar>
    </AppBar>)
};

Header.propTypes = {
    openLogin: PropTypes.func.isRequired,
    openCreateProfile: PropTypes.func.isRequired,
    openEditProfile: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired
}

export default Header;