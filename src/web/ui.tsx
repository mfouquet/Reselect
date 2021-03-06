import * as React from "react";
import "./ui.css";

interface IProps {
  pluginMessage: {
    reselectAmount: string | number;
  };
}

interface IState {
  reselectAmount: string | number;
}

export class Plugin extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      reselectAmount: this.props.pluginMessage.reselectAmount,
    };

    this.handleDismissClick = this.handleDismissClick.bind(this);
    this.handleWebsiteClick = this.handleWebsiteClick.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleVersionClick = this.handleVersionClick.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleDismissClick = () => {
    window.postMessage("dismissClicked", "");
  };

  handleWebsiteClick = () => {
    window.postMessage("websiteButtonClicked", "");
  };

  handleHelpClick = () => {
    window.postMessage("helpButtonClicked", "");
  };

  handleVersionClick = () => {
    window.postMessage("versionButtonClicked", "");
  };

  handleAmountChange(e) {
    this.setState({ reselectAmount: e.target.value });
  }

  handleSaveClick = () => {
    window.postMessage(
      "saveButtonClicked",
      JSON.stringify({
        reselectAmount: this.state.reselectAmount,
      })
    );
  };

  render() {
    const { reselectAmount } = this.state;
    return (
      <div className="dialog">
        <div className="dismiss" onClick={this.handleDismissClick}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L9 9"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <header />
        <main>
          <h3>Max Recent Selections Restored</h3>
          <div>
            <input
              autoFocus
              type="number"
              value={reselectAmount}
              onChange={this.handleAmountChange}
            />
          </div>
          <p>Setting this too high can adversely affect performance</p>
          <button className="button--save" onClick={this.handleSaveClick}>
            Save
          </button>
        </main>
        <footer>
          <button onClick={this.handleWebsiteClick}>Website</button>
          <span className="separator">&#183;</span>
          <button onClick={this.handleHelpClick}>Help</button>
          <span className="separator">&#183;</span>
          <button onClick={this.handleVersionClick}>2.1.0</button>
        </footer>
      </div>
    );
  }
}
