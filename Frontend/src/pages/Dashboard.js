import React from 'react';
import '../Dashboard.css'; // Import the CSS file


import RightSidebar from '../components/RightSidebar.js';
import Sidebar from '../components/Sidebar.js';
import MainContent from '../components/MainContent.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state here
        };
    }

    // Event handlers go here

    render() {
        return (
            <div className="container">
                <Sidebar/>
                <MainContent/>
                <RightSidebar/>
            </div>
        );
    }
}

export default Dashboard;
