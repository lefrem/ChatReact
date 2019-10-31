import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { addMessage, getMessages } from '../action/Messages';

const inputStyle = {
  marginRight: 15,
  width: 500,
};

const buttonStyle = {
  width: 100,
};

class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.state = { items: '', text: '' };
  }

  handleChange = (e) => {
    this.setState({ items: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.items.length) {
      return;
    }
    console.log(this.state.items)
    this.props.bindActionCreators([{message: this.state.items}]);
  }

  render() {
    return (
      <div style={{ display: 'flex', padding: 10, /*position: "absolute", bottom: 10, */}}>
        <input 
          placeholder="Message" 
          type="text" 
          style={inputStyle} 
          onChange={this.handleChange} 
          value={this.state.items} 
        />
        <br />
        <button style={buttonStyle} onClick={this.handleSubmit}>Envoyer</button>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    bindActionCreators: (message) => {
      dispatch(addMessage(message))
    },
    status: () => {
      dispatch(getMessages())
    }
  }
}



export default connect(
  null,
  mapDispatchToProps,
)(MessageBar);

//export default MessageBar;