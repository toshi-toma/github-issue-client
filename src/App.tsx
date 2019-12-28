import React, { useEffect } from "react";
import GitHub from "./api/GitHubClient";

const App = () => {
  const github = new GitHub("");
  useEffect(() => {
    github.getIssuesForRepo("yannickcr", "eslint-plugin-react");
  }, []);
  return <h1>GitHub Issue App</h1>;
};

export default App;
