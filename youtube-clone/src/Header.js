import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
    return (
        <div
            className="header">
                <h1> I am a header</h1>
                <MenuIcon />
                <img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt=""
                />
                <input type="text" />
                <SearchIcon />
                <VideoCallIcon />
                <AppsIcons />
                <NotificationsIcon />

        </div>
    );
}

export default Header;