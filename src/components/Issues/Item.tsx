import React from "react";

type State = "open" | "close";

interface Label {
  id: number;
  name: string;
  color: string;
}

interface User {
  name: string;
  id: number;
  avatarUrl: string;
  url: string;
}

export interface Issue {
  id: number;
  url: string;
  title: string;
  user: User;
  labels: Label[];
  state: State;
  comments: number;
  created_at: string;
  updated_at: string;
  body: string;
}

interface Props {
  issue: Issue;
}

const Item: React.FC<Props> = ({ issue }) => {
  const { url, title, user } = issue;
  return (
    <li>
      <div>
        <a href={url}>{title}</a>
        <a href={user.url}>{user.name}</a>
      </div>
    </li>
  );
};

export default Item;
