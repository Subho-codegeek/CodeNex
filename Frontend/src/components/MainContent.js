import React from 'react';

import RecentProblems from './RecentProblems';
import CommunityFriends from './CommunityFriends';
import Courses from './Courses';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state here
        };
    }

    // Event handlers go here

    render() {

        return (
            <main>
                <h1>Welcome, Amn !</h1>
                <div >
                    <Courses/>
                </div>
                <div className="users">
                    <CommunityFriends/>
                </div>
                <div className="recent-problem">
                    <RecentProblems/>
                </div>
            </main>
        );
    }
}

export default MainContent;
