import React,{Component} from 'react';
import MessageTimer from "./MessageTimer";

class MessageList extends Component {
    render() {
        return (
            <div
                style={{
                    marginBottom: 20,
                    backgroundColor: 'white',
                    padding: 10,
                }}
            >
                <div>{this.props.item}</div>
                <MessageTimer />
            </div>
        );
    };
}

export default MessageList;
