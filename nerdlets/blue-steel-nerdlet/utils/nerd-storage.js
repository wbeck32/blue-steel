import React from "react";
import { Toast, UserStorageMutation, UserStorageQuery } from "nr1";

const setGithubToken = () => {
  console.log("e: ");
  UserStorageMutation.mutate({
    actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
    collection: `blue-steel`,
    documentId: "global",
    document: { githubToken: process.env.GITHUB_PERSONAL_TOKEN }
  })
    .then(() => {
      Toast.showToast({
        title: `Update Saved.`,
        type: Toast.TYPE.NORMAL
      });
    })
    .catch(error => {
      console.error(error);
      Toast.showToast({
        title: error.message,
        type: Toast.TYPE.CRITICAL
      });
    });
};

const retrieveData = e => {
  console.log("e: ", e);
  UserStorageQuery.query({
    collection: `blue-steel`,
    documentId: 0
  })
    .then(data => {
      if (!data) {
        console.log(`Cannot`);
      }
      console.debug(data);
      // this.setState({ githubToken: data.githubToken });
    })
    .catch(error => {
      console.error(error);
      // this.setState({ githubToken: `` });
      Toast.showToast({
        title: error.message,
        type: Toast.TYPE.CRITICAL
      });
    });
};

export default setGithubToken;
