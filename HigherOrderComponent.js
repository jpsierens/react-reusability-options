import React, { Component } from 'react';

export default function withUserActive(WrappedComponent, userId) {
  return class extends Component {
    state = { userActive: null }

    componentDidMount() {
      setTimeout(() => this.setState({ userActive: Math.random() > 0.5}), 1000)
    }

    render() {
      return <WrappedComponent userActive={this.state.userActive} {...this.props}/>
    }
  }
}