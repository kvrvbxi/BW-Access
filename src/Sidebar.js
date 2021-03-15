import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_chats">
                <SidebarChat addNewSector />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />


            </div> 
        </div>
    );
}

export default Sidebar;
