import React, { Component } from 'react';
import { Button } from 'nr1';
import q from './github-query';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
  getStuff = async e => {
    console.log('e: ', e);
    const m = await q();
    console.log('m: ', m);
    return m;
  };

  render() {
    return <Button onClick={e => this.getStuff(e)}>clicky</Button>;
  }
}
