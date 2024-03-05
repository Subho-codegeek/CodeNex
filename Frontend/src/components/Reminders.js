import React from 'react';

import Notifications from '../components/Notifications.js';

class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state here
        };
    }

    // Event handlers go here

    render() {
        return (
            <div className="reminders">
                <div className="header">
                    <h2>Reminders</h2>
                    <span className="material-icons-sharp">
                        notifications_none
                    </span>
                </div>
                <Notifications/>
                <div className="notification add-reminder">
                <div>
                        <span class="material-icons-sharp">
                            add
                        </span>
                        <h3>Add Reminder</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reminder;
