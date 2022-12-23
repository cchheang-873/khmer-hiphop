import { useState } from "react";
import "./SearchInput.scss";

export const SearchInput = (): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <div className={"SearchInput-container"}>
      <i className={"material-icons"}>search</i>
      <input
        className={"SearchInput-input"}
        placeholder={`Search for artist`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
