import React from 'react';

import NavBar from '../components/NavBar.js';
import UserProfile from '../components/UserProfile.js';
import Reminders from './Reminders.js';

class RightSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state here
        };
    }

    // Event handlers go here

    render() {
        return (
            <div className="right-section">
                    <NavBar/>
                    <UserProfile/>
                    <Reminders/>
            </div>
        );
    }
}

export default RightSidebar;
