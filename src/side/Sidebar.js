import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MoneyIcon from "@material-ui/icons/Money";
import GavelIcon from "@material-ui/icons/Gavel";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useStateValue } from "./StateProvider";


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
                src={user.photoURL} 
                title={user.displayName}
            />
            <SidebarRow Icon={LocalHospitalIcon} title="Health"
            />
            <SidebarRow Icon={MoneyIcon} title="Financial" />
            <SidebarRow Icon={GavelIcon} title="Legal" />
            <SidebarRow Icon={CastForEducationIcon} title="Education" />
            <SidebarRow Icon={GolfCourseIcon} title="Entertainment" />
            <SidebarRow Icon={FastfoodIcon} title="Retail" />
        </div>
    );
}

export default Sidebar
