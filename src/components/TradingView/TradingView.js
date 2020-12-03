// https://stackoverflow.com/questions/53845011/how-to-to-insert-tradingview-widget-into-react-js-which-is-in-script-tag-link-h
import React, { Component } from "react";

export default class TradingView extends Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML =
      /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
      this._ref.current.appendChild(script);
  }

  render() {
    return (
      <div class="tradingview-widget-container" ref={this._ref}>
        <div class="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}
