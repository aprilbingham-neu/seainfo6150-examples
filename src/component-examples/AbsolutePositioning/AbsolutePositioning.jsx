import React from "react";
import styles from "./absolutepositioning.module.css";

const AbsolutePositioning = () => {
  return (
    <section className={styles.container}>
      <h2>Absolute Positioning</h2>
      <div>
        <p className={styles.foo}>I am absolutely positioned!</p>
      </div>
      <div className={styles.relative}>
        <p className={styles.bar}>I am also positioned!</p>
      </div>
    </section>
  );
};

export default AbsolutePositioning;
