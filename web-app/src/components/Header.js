import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const Header = () => {
    return (<AppBar position="static">
        <Toolbar>
            <Button>Login</Button>
            <Button>Create an account</Button>
        </Toolbar>
    </AppBar>)
};

export default Header;