import React from 'react'
import { UserStorageQuery, UserStorageMutation } from 'nr1'


const UserStorage = () => {
	UserStorageMutation.mutate({
		actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
		collection: 'foo',
		documentId: 'bar',
		document: {
			name: 'John',
			surname: 'Doe',
		},
	});
	return (<div> I am dead</div>)

}


export default UserStorage;

