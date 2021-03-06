import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = makeStyles(() => ({
    root: {
        maxWidth: 300,
    },
    media: {
        marginTop:'30px'
      }
}));

const ProfileSummary = ({ user }) => {
    const classes = styles();
    return(
    <Card className={classes.root}>
        <CardHeader title={user.name}/>
        {user.profilePic && <CardMedia component="img" className={classes.media} image={user.profilePic}/>}
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {user.email}
            </Typography>
        </CardContent>
    </Card>)
};

ProfileSummary.propTypes = {
    user: PropTypes.object.isRequired
}

export default ProfileSummary;