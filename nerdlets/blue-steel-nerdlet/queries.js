const queries = [ `query ($number_of_repos: Int!) {
  viewer {
    name
    repositories(last: $number_of_repos) {
      nodes {
        name
      }
    }
  }
}`, `query ($number_of_repos: Int!) {
  viewer {
    name
    repositories(last: $number_of_repos) {
      nodes {
        name
      }
    }
  }
}`, `query ($number_of_repos: Int!) {
  viewer {
    name
    repositories(last: $number_of_repos) {
      nodes {
        name
      }
    }
  }
}`, `query {
	securityVulnerabilities(first: 100, orderBy: {field: UPDATED_AT, direction: ASC}, severities: CRITICAL) {
    		nodes {
      		advisory {
        		summary
        		severity
        		updatedAt
      		}
      	package {
        	name
      	}
    	}
  	}
	}` ];

export default queries;