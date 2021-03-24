import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
    SearchOutlined,
    AttachFile,
    MoreVert, InsertEmoticon
} from "@material-ui/icons";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> Room name</h3>
                    <p> Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${false && "chat__receiver"}`}>
                    <span className="chat__name">Nicholas</span>
                    Hey Guys!!!
                    <span className="chat__timestamp"> 07:00PM</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                        type="text"
                        placeholder="Type your message"
                    />
                    <button type="submit">
                        Send a message
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Chat
