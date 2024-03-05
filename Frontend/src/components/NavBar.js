import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
        };
    }

    handleDarkModeToggle = () => {
        this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }), () => {
            if (this.state.isDarkMode) {
                document.body.classList.add('dark-mode-variables');
            } else {
                document.body.classList.remove('dark-mode-variables');
            }
        });
    }

    render() {
        const { isDarkMode } = this.state;

        return (
            <div className="nav">
                <button id="menu-btn">
                    <span className="material-icons-sharp">
                        menu
                    </span>
                </button>
                <div className="dark-mode" onClick={this.handleDarkModeToggle}>
                    <span className={`material-icons-sharp ${isDarkMode ? '' : 'active'}`}>
                        light_mode
                    </span>
                    <span className={`material-icons-sharp ${isDarkMode ? 'active' : ''}`}>
                        dark_mode
                    </span>
                </div>

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Amn Ullh</b></p>
                        <small className="text-muted">Student</small>
                    </div>
                    <div className="profile-photo">
                        <img src="images/avatar1.png" alt="Profile" />
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
