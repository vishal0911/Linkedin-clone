import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function sidebar() {

    const recentItem = (topic) => (
    
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Vishal Das</h2>
                <h4>vishal.das0911@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar__statNumber">3,500</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on your post</p>
                    <p className="sidebar__statNumber">1,000</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem('Programming')}
                {recentItem('developer')}
                {recentItem('softwareengineering')}
            </div>
        </div>
    )
}

export default sidebar
