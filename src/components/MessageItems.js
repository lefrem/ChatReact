import React,{Component} from 'react';
import MessageTimer from "./MessageTimer";
import Emoji from 'react-emoji-render';

class MessageItems extends Component {
    
    render() {
        return (
            <div
                style={{
                    marginBottom: 20,
                    backgroundColor: 'white',
                    padding: 10,
                }}
            >
                <Emoji text={this.props.msg.message}/>
                {/* <MessageTimer /> */}
            </div>
        );
    };
}

export default MessageItems;
