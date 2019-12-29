import React, { Component } from 'react';
import { Button } from 'nr1';
import q from './github-query';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
  getStuff = async () => {
    const m = await q();
    return m;
  };

  render() {
    return <Button onClick={() => this.getStuff()}>clicky</Button>;
  }
}
