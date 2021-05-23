import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        right: 0
    }
}));

const Header = ({ onLogin, onCreateProfile }) => {
    const classes = styles();
    return (<AppBar position="static">
        <Toolbar>
            <div className={classes.root}>
                <Button variant="outlined" onClick={onLogin}>Login</Button>
                <Button variant="outlined" onClick={onCreateProfile}>Create an account</Button>
            </div>
        </Toolbar>
    </AppBar>)
};

Header.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onCreateProfile: PropTypes.func.isRequired,
}

export default Header;