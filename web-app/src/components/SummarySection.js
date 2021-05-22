import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import ProfileSummary from "./ProfileSummary";

const SummarySection = ({ users }) => {
    return (
        <>  {!users && <Typography variant="body2" component="p">No content</Typography>}
            {users && users.map((user,i) => <ProfileSummary key={`profile${i}`} user={user}/>)}
        </>
    );
}

SummarySection.propTypes = {
    users: PropTypes.array.isRequired,
};

export default SummarySection;