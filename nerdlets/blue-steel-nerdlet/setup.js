import React, { useState } from "react";
import PropTypes from "prop-types";

const Setup = props => {
  const handleClick = e => {
    console.log("e: ", e);
    this.setState({ token: e.target.value });
  };

  // setGithubToken = async githubToken => {
  //   console.log("githubToken: ", githubToken.target);
  //   const mutation = {
  //     actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
  //     collection: "global",
  //     documentId: "userToken",
  //     document: { githubToken }
  //   };
  //   UserStorageMutation.mutate(mutation);
  //   // this.setState({ githubToken });
  // };

  return (
    <div>
      <p>You clicked {props.token} times</p>
      <button value={props.token} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Setup;
