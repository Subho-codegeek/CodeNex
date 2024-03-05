import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state here
        };
    }

    // Event handlers go here

    render() {
        return (
            <div className="user-profile">
                <div className="logo">
                    <img src="code-sync.png" alt="Logo" />
                    <h2>Code . Collab. Create</h2>
                </div>
            </div>
        );
    }
}

export default UserProfile;
