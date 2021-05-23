import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";
import ProfileSummary from "./ProfileSummary";

const styles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}));

const SummarySection = ({ users }) => {
    const classes = styles();
    return (
        <div className={classes.container}>  {!users && <Typography variant="body2" component="p">No content</Typography>}
            {users && users.map((user,i) => <ProfileSummary key={`profile${i}`} user={user}/>)}
        </div>
    );
}

SummarySection.propTypes = {
    users: PropTypes.array.isRequired,
};

export default SummarySection;