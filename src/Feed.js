import React from 'react';
import { useState, useEffect } from "react";
import './Feed.css';

import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        //snapshot keeps track of changes in the database information, keeping it ready for displace, real time connection to database., doc. data is the info in the database base on the id.
        db.collection('posts').orderBy("timestamp", "desc" ).onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []); //by keeping bracket empty it only runs once 

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            {posts.map((post) =>(
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
            
        </div>
    );
}

export default Feed
