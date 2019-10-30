import React, { Component } from "react";
import MessageItems from "./MessageItems";

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
      }

  render() {
    return (
      <div style={{margin: 25,}}>
        {this.props.items.map(item => (
            <MessageItems
                key={item.id} item={item.text}
            />
          ))}
      </div>
    );
  }
}

export default MessageList;
