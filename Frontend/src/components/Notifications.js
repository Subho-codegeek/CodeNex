import React from 'react';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [
                {
                    icon_name: "volume_up",
                    title: "Meeting",
                    time: "08:00 AM - 12:00 PM",
                    desc: "Special class on Recurssion for Preplacement Training",
                },
                {
                    icon_name: "edit",
                    title: "Workshop",
                    time: "08:00 AM - 12:00 PM",
                    desc: "Introduction to AI/ML : By Professor Mausam, IIT Delhi",
                },
            ],
        };
    }

    // Event handlers go here

    render() {
        const { notifications } = this.state;

        return (
            <div className="notifications">
                {notifications.map((notification, index) => (
                    <div key={index} className="notification">
                        <div className="icon">
                            <span className="material-icons-sharp">
                                {notification.icon_name}
                            </span>
                        </div>
                        <div className="content">
                            <div class="info">
                                <h3>{notification.title}</h3>
                                <small class="text_muted">
                                    {notification.time}
                                </small>
                                <p>{notification.desc}</p>
                            </div>
                            <span class="material-icons-sharp">
                                more_vert
                            </span>
                            
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Notifications;
