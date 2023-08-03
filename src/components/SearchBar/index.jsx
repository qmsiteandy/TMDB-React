import { useState } from "react";
import style from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function submitHandler(e) {
    if (e.key === "Enter") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function typeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon width={20} className={style.icon} />
      <input
        type="text"
        className={style.input}
        placeholder="Search a tv show..."
        onKeyUp={submitHandler}
        onChange={typeHandler}
        value={value}
      />
    </>
  );
}
