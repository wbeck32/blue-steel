// TODO: Create more queries and implement pagination, fragments and directives
const queries = [ `query ($number_of_repos: Int!) {
  viewer {
    name
    repositories(first: $number_of_repos,orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
				name
				updatedAt
				openGraphImageUrl
      }
		}
  }
}`, `query($number_of_repos: Int!) {
  viewer {
    login
    name
    repositories(first: $number_of_repos, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        name
        createdAt
        issueOrPullRequest(number: 3) {
          ... on PullRequest {
            title
            updatedAt
            author {
              ... on User {
                name
              }
            }
            changedFiles
            deletions
            state
          }
        }
      }
    }
  }
}`,`query {
  viewer {
    name
    repositories(first: 100) {
      nodes {
        name
        vulnerabilityAlerts(first: 100) {
          nodes {
            packageName
            securityAdvisory {
              severity
              summary
            }
          }
        }
      }
    }
  }
}` ];

export default queries;