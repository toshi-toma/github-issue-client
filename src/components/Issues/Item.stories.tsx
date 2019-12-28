import React from "react";
import Item from "./Item";

export default {
  title: "Issues/Item"
};

const labels = [
  {
    id: 1,
    name: "help wanted",
    color: "159818"
  },
  {
    id: 1,
    name: "enhancement",
    color: "84b6eb"
  }
];

const user = {
  name: "toshi-toma",
  id: 1,
  avatarUrl: "https://avatars3.githubusercontent.com/u/12896448?v=4",
  url: "https://github.com/toshi-toma"
};

const issueBase = {
  id: 1,
  url: "https://github.com/toshi-toma/sample/issues/1",
  title: "Issue sample 1",
  user,
  labels,
  state: "open" as const,
  comments: 1,
  created_at: "2019-12-23T14:02:53Z",
  updated_at: "2019-12-23T19:54:18Z",
  body: "this is issue body example"
};

export const normal = () => <Item issue={issueBase} />;

export const closedIssue = () => (
  <Item issue={{ ...issueBase, state: "close" }} />
);
