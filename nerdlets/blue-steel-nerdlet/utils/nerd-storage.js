import React from 'react';
import { Toast, UserStorageMutation, UserStorageQuery } from 'nr1';

const saveData = () => {
	UserStorageMutation.mutate({
		actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
		collection: ``,
		documentId: 0,
		document: { githubToken }})
			.then(() => {
				Toast.showToast({
					title: `Update Saved.`,
					type : Toast.TYPE.NORMAL
				});
			})
			.catch(error => {
				console.error(error);
				Toast.showToast({ title: error.message,
					type : Toast.TYPE.CRITICAL });
			});
};

const retrieveData = () => {
	UserStorageQuery.query({
		collection: ``,
		documentId: 0
	})
			.then(data => {
				if (!data) {
					console.log(`Cannot`);
				}
				console.debug(data);
				this.setState({ githubToken: data.githubToken });
			})
			.catch(error => {
				console.error(error);
				this.setState({ githubToken: `` });
				Toast.showToast({
					title: error.message,
					type : Toast.TYPE.CRITICAL
				});
			});
};
