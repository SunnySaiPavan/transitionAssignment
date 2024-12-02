import React from 'react';
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1 className='heading'>Risk Hawk</h1>
                <span className='span'>manage your exposures</span>
            </div>
            <ul className="menu">
                <li><i className="bi bi-card-list" ></i> Internal Audit   <i className="bi bi-arrow-right-short"></i></li>
                <li><i className="bi bi-clipboard-check"></i> UAT Testing</li>
                <li><i className="bi bi-link"></i> Intract   <i className="bi bi-arrow-right-short"></i></li>
                <li><i className="bi bi-people"></i> Queue</li>
                <li><i className="bi bi-diagram-3"></i> Workflow</li>
                <li><i className="bi bi-person"></i> Admin</li>
                <li><i className="bi bi-box"></i> Asset</li>
                <li><i className="bi bi-people"></i> Parent</li>
                <li><i className="bi bi-1-circle"></i> Option One</li>
                <li><i className="bi bi-2-circle"></i> Option Two</li>
                <li><i className="bi bi-wrench"></i> All Accessories    <i className="bi bi-arrow-right-short"></i></li>
                <li><i className="bi bi-stars"></i> Decorating    <i className="bi bi-arrow-right-short"></i></li>
                <li><i className="bi bi-gift"></i> presenting</li>
            </ul>
        </div>
        );
  
}

export default Sidebar;