import CreateIcon from '@material-ui/icons/Create';
import React, { useState, useEffect } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventIcon from '@material-ui/icons/Event';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase';

function Feed() {

    const [input, setinput]= useState("");
    const [posts, setPosts]= useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamps","desc").onSnapshot((snapshot)=>
          setPosts(
              snapshot.docs.map((doc) =>({
                  id: doc.id,
                  data: doc.data(),
              }))
          )
        );
    },[]);

    const sendPost=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name:'Vishal Das',
            description:'worked in linkedin clone',
            message:input,
            photoUrl:'',
            timestamps: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setinput("");
    };
    
    return (
        <div className="feed">
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setinput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon={OndemandVideoIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={EventNoteIcon} title='Write article' color="#7FC15E" />
                </div>

            </div>

            {/* {Post Section} */}
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                    key={id} 
                    name={name} 
                    description={description} 
                    message={message} 
                    photoUrl={photoUrl}
                />
            )

            )};
  
        </div>
    )
}

export default Feed
