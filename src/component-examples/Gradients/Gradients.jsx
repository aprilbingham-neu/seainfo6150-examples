import React, { useState } from "react";
import styles from "../examples.module.css";

import LinearGradients from "./LinearGradients";
import RadialGradients from "./RadialGradients";

const Gradients = () => {
  const [display, setDisplay] = useState("linear");

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button onClick={() => setDisplay("linear")}>Linear</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setDisplay("css")}>Radial</button>
        </li>
      </ul>
      <div>
        {display === "linear" ? <LinearGradients /> : <RadialGradients />}
      </div>
    </>
  );
};

export default Gradients;
