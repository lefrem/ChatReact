import React, { Component } from 'react';
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

const chatStyle = {
    width: 675,
    height: 550,
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

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.addMessage = this.addMessage.bind(this);
      }

    addMessage(message) {
        const newItem = {
            text: message,
            id: this.state.items.length +1
        };
        this.setState(state=>({
            items: state.items.concat(newItem),
        }));
        console.log(newItem);
        
    }

    render() {
        return (
            <div style={chatStyle}>
                <div style={titleStyle}>ChatBox</div>
                <MessageBar addMessage={this.addMessage}/>
                <MessageList items={this.state.items}/>
            </div>
        );
    };
}

export default Chat;
