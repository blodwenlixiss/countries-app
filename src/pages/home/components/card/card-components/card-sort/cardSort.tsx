import React from "react";
import styles from "./cardSort.module.css";

const CardSort: React.FC<{
  onSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ onSort }) => {
  return (
    <div className={styles.selection}>
      <select name="filter" onChange={onSort}>
        <option value="default">-- Please Select --</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending </option>
      </select>
    </div>
  );
};
export default CardSort;
