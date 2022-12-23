import React, { useState } from "react";
import "./SearchInput.scss";

export const SearchInput = (props: {
  setFilter: React.Dispatch<string>;
}): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <div className={"SearchInput-container"}>
      <i className={"material-icons"}>search</i>
      <input
        className={"SearchInput-input"}
        placeholder={`Search for artist`}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          props.setFilter(e.target.value);
        }}
      />
    </div>
  );
};
