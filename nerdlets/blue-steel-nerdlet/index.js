import React, { Component } from "react";
import { Button, UserStorageMutation } from "nr1";
import query from "./utils/github-query";
import Setup from "./setup";
import ErrorBoundary from "./utils/ErrorBoundary";
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class BlueSteelNerdlet extends Component {
  constructor(props) {
    super(props);
    this._getStuff = this._getStuff.bind(this);
    this._setGithubToken = this._setGithubToken.bind(this);
    this.state = {
      token: 123
    };
  }

  _getStuff = async () => {
    const myRepos = await query();
    return myRepos;
  };

  _setGithubToken = async githubToken => {
    console.log("githubToken: ", githubToken);
    const mutation = {
      actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
      collection: "global",
      documentId: "userToken",
      document: { githubToken }
    };
    UserStorageMutation.mutate(mutation);
    this.setState({ githubToken });
  };

  render() {
    console.log("this.state: ", this.state);
    return (
      <div>
        <ErrorBoundary>
          <Setup {...this.state}>setting up</Setup>
        </ErrorBoundary>
      </div>
    );
  }
}
