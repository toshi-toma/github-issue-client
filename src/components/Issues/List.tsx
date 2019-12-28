import React from "react";
import Item, { Issue } from "./Item";

interface Props {
  issues: Issue[];
}

const List: React.FC<Props> = ({ issues }) => {
  return (
    <ul>
      {issues.map(issue => {
        return <Item issue={issue} />;
      })}
    </ul>
  );
};

export default List;
