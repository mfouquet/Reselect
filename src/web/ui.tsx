import * as React from "react";
import "./ui.css";

interface IProps {
  pluginMessage: {
    nudgeAmount: string | number;
    pushAmount: string | number;
    shoveAmount: string | number;
  };
}

interface IState {
  nudge: string | number;
  push: string | number;
  shove: string | number;
}

export class Plugin extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      nudge: this.props.pluginMessage.nudgeAmount,
      push: this.props.pluginMessage.pushAmount,
      shove: this.props.pluginMessage.shoveAmount,
    };

    this.handleDismissClick = this.handleDismissClick.bind(this);
    this.handleWebsiteClick = this.handleWebsiteClick.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleVersionClick = this.handleVersionClick.bind(this);
    this.handleNudgeChange = this.handleNudgeChange.bind(this);
    this.handlePushChange = this.handlePushChange.bind(this);
    this.handleShoveChange = this.handleShoveChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
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

  handleNudgeChange(e) {
    this.setState({ nudge: e.target.value });
  }

  handlePushChange(e) {
    this.setState({ push: e.target.value });
  }

  handleShoveChange(e) {
    this.setState({ shove: e.target.value });
  }

  handleSaveClick = () => {
    window.postMessage(
      "saveButtonClicked",
      JSON.stringify({
        nudgeAmount: this.state.nudge,
        pushAmount: this.state.push,
        shoveAmount: this.state.shove,
      })
    );
  };

  handleResetClick = () => {
    this.setState({
      nudge: "1",
      push: "10",
      shove: "15",
    });
  };

  render() {
    const { nudge, push, shove } = this.state;
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
        <header>
          <button onClick={this.handleWebsiteClick}>Website</button>
          <span className="separator">&#183;</span>
          <button onClick={this.handleHelpClick}>Help</button>
          <span className="separator">&#183;</span>
          <button onClick={this.handleVersionClick}>1.4.2</button>
        </header>
        <main>
          <div className="row">
            <label>Nudge</label>
            <input
              autoFocus
              type="number"
              value={nudge}
              onChange={this.handleNudgeChange}
            />
          </div>
          <div className="divider" />
          <div className="row">
            <label>Push</label>
            <input
              type="number"
              value={push}
              onChange={this.handlePushChange}
            />
          </div>
          <div className="divider" />
          <div className="row">
            <label>Shove</label>
            <input
              type="number"
              value={shove}
              onChange={this.handleShoveChange}
            />
          </div>

          <button className="button--save" onClick={this.handleSaveClick}>
            Save
          </button>
          <button onClick={this.handleResetClick}>Reset</button>
        </main>
      </div>
    );
  }
}
