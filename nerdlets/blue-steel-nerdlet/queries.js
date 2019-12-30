const queries = [ `query {
		viewer {
			repositories(last:5) {
				totalCount
				nodes {
					name
					createdAt
					commitComments(last:1) {
						totalCount
					}
				}
			}
		}
	}`, `` ]

export default queries;