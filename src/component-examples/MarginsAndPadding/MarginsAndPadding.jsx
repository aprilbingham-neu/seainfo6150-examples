import React, { useState } from "react";
import styles from "../examples.module.css";

import Margins from "./Margins";
import Padding from "./Padding";

const MarginsAndPadding = () => {
  const [display, setDisplay] = useState("margins");

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button onClick={() => setDisplay("margins")}>Margins</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setDisplay("padding")}>Padding</button>
        </li>
      </ul>
      <div>
        {display === "margins" ? <Margins /> : <Padding />}
      </div>
    </>
  );
};

export default MarginsAndPadding;
