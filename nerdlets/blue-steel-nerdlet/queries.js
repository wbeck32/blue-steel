const queries = [ `query ($number_of_repos: Int!) {
  viewer {
    name
    repositories(last: $number_of_repos) {
      nodes {
        name
      }
    }
  }
}`, `` ];

export default queries;