import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import "./SidebarChat.css";

function SidebarChat() {
    const [seed, setSeed] = useState("");
     
    useEffect (() => { setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="sidebarChat">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="looking" />
            <div className="sidebarChat_info">
                <h4>Business Sector</h4>
                <p>Top industry News...</p>
            </div>
        </div>
    );
}

export default SidebarChat;
