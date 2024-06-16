import React, { FC, useState } from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface GithubUserSearchProps {}

const GithubUserSearch: FC<GithubUserSearchProps> = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {};
  return (
    <div className="app-window">
      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button type="button" onClick={handleClick}></button>
    </div>
  );
};

export default GithubUserSearch;
