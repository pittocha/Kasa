import React from "react";
import { PropTypes } from "prop-types";

const Profile = ({ name, picture }) => {
    return (
        <div className="profile">
            <p className="name">{name}</p>
            <div className="profile-pic">
            <img src={picture} alt="profile" />
            </div>
        </div>
    )
}

Profile.propTypes ={
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
Profile.defaultProps = {
    name:'',
    picture:'',
}
export default Profile