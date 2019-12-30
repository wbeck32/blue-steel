import React, { Component } from "react";
import { Button } from "nr1";
import query from "./utils/github-query";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
  getStuff = async () => {
    const myRepos = await query();
    return myRepos;
  };

  render() {
    console.log("process.env.GITHUB_PERSONAL_TOKEN: ", process.env);

    return <Button onClick={() => this.getStuff()}>clicky</Button>;
  }
}
