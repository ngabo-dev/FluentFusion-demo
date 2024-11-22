import React from "react";

function Sidebar() {
    return (
        <div className="sidebar bg-dark text-white">
            <div className="logo-container">
                <img src="/images/Screenshot from 2024-11-22 17-35-34.png" alt="Logo" className="sidebar-logo" />
            </div>
            <ul>
                <li>Courses</li>
                <li>Progress</li>
                <li>Recommendations</li>
                <li>Reviews</li>
                <li>Resources</li>
                <li>Events</li>
                <li>Community</li>
                <li>Settings</li>
                <li>Help Center</li>
            </ul>
        </div>
    );
}

export default Sidebar;