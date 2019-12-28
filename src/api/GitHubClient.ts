import Octokit from "@octokit/rest";

class GitHubClient {
  private octokit: Octokit;

  constructor(token: string) {
    this.octokit = token
      ? new Octokit({
          auth: token
        })
      : new Octokit();
  }

  getIssuesForRepo = async (owner: string, repo: string) => {
    try {
      const { data } = await this.octokit.issues.listForRepo({
        owner,
        repo
      });
      console.log(data);
      return data;
    } catch (e) {
      return new Error("throw error at getIssuesForRepo");
    }
  };
}

export default GitHubClient;
