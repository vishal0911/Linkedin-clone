import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function Widgets() {

    const newsArticle= (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <BookmarkBorderIcon/>
                
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
                
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("This is just a clone","by Vishal")}
            {newsArticle("Next I am gonna work on Netflix-clone","by Vishal again")}
            {newsArticle("This is a great news","by Vishal")}
            
        </div>
    )
}

export default Widgets
