import React from 'react'

const Profile = props => {
    return (
        <div>
            <h1> Hello {props.name}, this is your bio {props.bio}, and this is your profession {props.profession} </h1>
            {props.children}
        </div>
    );
};
Profile.defaultProps = {
    name: "S"
}

export default Profile
