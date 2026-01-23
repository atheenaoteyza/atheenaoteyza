export async function getGitHubStats(username) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query($username: String!) {
          user(login: $username) {
            repositories(ownerAffiliations: OWNER, first: 100) {
              totalCount
            }
            contributionsCollection {
              totalCommitContributions
              totalPullRequestContributions
            }
          }
        }
      `,
      variables: { username },
    }),
    next: { revalidate: 3600 },
  });

  const json = await response.json();

  // 🔍 DEBUGGING: Log the actual error to your terminal
  if (!json.data) {
    console.error("❌ GitHub API Error:", json);
    return { repos: 0, commits: 0, prs: 0 };
  }

  const user = json.data.user;

  // Safety check: User might not be found
  if (!user) {
    console.error("❌ User not found:", username);
    return { repos: 0, commits: 0, prs: 0 };
  }

  return {
    repos: user.repositories.totalCount,
    commits: user.contributionsCollection.totalCommitContributions,
    prs: user.contributionsCollection.totalPullRequestContributions,
  };
}
