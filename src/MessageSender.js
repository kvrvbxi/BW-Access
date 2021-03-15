import React from 'react';
import { useState } from "react";
import { Avatar } from "@material-ui/core";

import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";// local firebase function
import firebase from "firebase";// online functions 

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        //db fucntions to add data to the database
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),// to avoid inconsistent time due to area codes
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });
    
        setInput("");
        setImageUrl("");
        
    };

    return (

        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} className="messageSender_input" placeholder={`What on the agenda for ${user.displayName}?`} />
                    <input value= {imageUrl}  onChange={e => setImageUrl(e.target.value)} placeholder="Image URL (Optional)" />
                
                    <button onClick={handleSubmit} type="submit">
                        hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "Orange" }} />
                    <h3>Company Spirit</h3>
                </div>
            </div>            
        </div>
    );
}

export default MessageSender;
;