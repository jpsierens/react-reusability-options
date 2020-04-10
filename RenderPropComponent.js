import React, { Component } from 'react';

export default class RenderPropComponent extends Component {
  state = { userActive: null }

  componentDidMount() {
    setTimeout(() => this.setState({ userActive: Math.random() > 0.5}), 1000)
  }

  render() {
    return this.props.render(this.state.userActive);
  }
}