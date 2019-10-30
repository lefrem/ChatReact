import React,{Component} from 'react';

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
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.props.addMessage(this.state.text);
  }

  render() {
    return (
      <div style={{ display: 'flex', padding: 10, /*position: "absolute", bottom: 10, */}}>
        <input placeholder="Message" type="text" style={inputStyle} id="new-todo" onChange={this.handleChange} value={this.state.text}/>
        <br />
        <button style={buttonStyle} onClick={this.handleSubmit}>Envoyer</button>
      </div>
    );
  };
}

export default MessageBar;
