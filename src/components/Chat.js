import React, { Component } from 'react';
import MessageList from "./MessageList";
import MessageBar from "./MessageBar"
import store from "./../store/configureStore";
import {Provider} from "react-redux";

const chatStyle = {
    backgroundColor: "cyan",
    display: "flex",
    flexDirection: "column",
    position: "relative",
};

const titleStyle = {
    textAlign: 'center',
    fontSize: 50
};

class Chat extends Component {
    render() {
        return (
            <div style={chatStyle}>
                <div style={titleStyle}>ChatBox</div>
                <Provider store={store}>
                    <MessageBar/>
                    <MessageList/>
                </Provider>             
            </div>
        );
    };
}

export default Chat;
