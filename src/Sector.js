import { Avatar } from '@material-ui/core';
import "./Sector.css"
import React, { useEffect, useState } from 'react';

function Sector() {
    const [seed, setSeed] = useState("");
     
    useEffect (() => { setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return (
        <div classname="sector">
            <div className= "sector_Header">
                <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="looking" />
            </div>
            <div className= "sector_body"></div>
        </div>
    );
}

export default Sector;