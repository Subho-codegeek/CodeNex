import React from 'react';

import SidebarItem from '../components/SidebarItem.js';

const CloseButton = () => {
    return (
        <div className="close" id="close-btn">
            <span className="material-icons-sharp">
                close
            </span>
        </div>
    );
};

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state here
        };
    }

    // Event handlers go here

    render() {
        return (
            <aside>
                <div className="toggle">
                    <CloseButton/>
                </div>
                <div className="sidebar">
                    <SidebarItem icon="dashboard" title="Dashboard" to="/" />
                    <SidebarItem icon="code" title="Compiler" to="/compiler" />
                    <SidebarItem icon="group" title="Create Room" to="/room" />
                    <SidebarItem icon="person_add" title="Join Room" to="/room" />
                    <SidebarItem icon="forum" title="Community" messageCount={9} />
                    <SidebarItem icon="manage_accounts" title="Account Settings" />
                    <SidebarItem icon="logout" title="Logout" />
                </div>
            </aside>
        );
    }
}

export default Sidebar;
