import React, { Component } from "react";
import MessageItems from "./MessageItems";
import { connect } from 'react-redux';
import { getMessages } from "../action/Messages";

class MessageList extends Component {
  componentDidMount(){
    this.props.dispatch(getMessages());
  }  
  
  constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
      }

  render() {
    console.log(this.props)
    return (
      <div style={{margin: 25,}}>
        {this.props.messages.map(msg => (
          msg.map(final => (
            <MessageItems msg={final} />
          ))         
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      messages: state.Message
    }
  }

export default connect(mapStateToProps)(MessageList);
