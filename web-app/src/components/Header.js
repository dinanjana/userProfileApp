import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const Header = ({ openLogin, openCreateProfile, openEditProfile, isEdit }) => {
    return (<AppBar position="static">
        <Toolbar>
            <div>
                <Button variant="outlined" onClick={() => openLogin(true)}>Login</Button>
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
    isEdit: PropTypes.bool.isRequired
}

export default Header;