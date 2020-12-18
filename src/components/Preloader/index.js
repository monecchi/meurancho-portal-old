import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import './styles.scss';
import '../IconPreloader/styles.scss';

import DotsLoading from '../IconPreloader';

/**
 * Based on https://github.com/codefacebook/react-page-loading
 */
class Preloader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => this.setTimer();

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) {
      this.clearTimer();
      this.setState({ loading: true }, () => this.setTimer());
    }
  };

  clearTimer = () => clearTimeout(this.timeout);

  timer = () => this.setState({ loading: false }, () => this.clearTimer());

  setTimer = () => (this.timeout = setTimeout(this.timer, 1000));


  // Cancel timeout subscription on componentWillUnmount
  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  render() {
    const { loading } = this.state
    const { loader } = this.props;
    //const { color, delay, size, loader } = this.props

    let containerStyle = {
      Position: 'absolute',
      width: 'calc(100% - 280px)',
      display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'calc(100% - 280px)'
    }

    if (loading) {
      if (loader === "Loading") {
        return (
          <div className="preloader" style={containerStyle}>
            <div className="dot-flashing"></div>
            <div className="sr-only"><span>Loading...</span></div>
          </div>
        )
      } else if (loader === "Loading2") {
        return (
          <div className="preloader" style={containerStyle}>
            <div className="dot-falling"></div>
            <div className="sr-only"><span>Loading...</span></div>
          </div>
        )
      } else if (loader === "Loading3") {
        return (
          <div className="preloader" style={containerStyle}>
            <DotsLoading />
            <div className="sr-only"><span>Loading...</span></div>
          </div>
        )
      }
    }

    return (
      <div>
        {!this.state.loading ? document.getElementsByTagName("body")[0].classList.add("loaded") : null}
        {this.props.children}
      </div>
    )
  }
}

Preloader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.string,
  loader: PropTypes.string,
}

Preloader.defaultProps = {
  color: "#FC0E36",
  duration: 1.3,
  size: "2.5rem",
  loader: "Loading",
}

export default withRouter(Preloader);
