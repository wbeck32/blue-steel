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
  viewer {
    name
    repositories(first: 100) {
      nodes {
        name
        vulnerabilityAlerts(first: 100) {
          totalCount
          nodes {
            securityAdvisory {
              severity
              summary
              updatedAt
            }
          }
        }
      }
    }
  }
}` ];

export default queries;