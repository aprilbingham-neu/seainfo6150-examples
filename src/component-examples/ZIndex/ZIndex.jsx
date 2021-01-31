import React from "react";
import styles from "./zindex.module.css";

const ZIndex = () => {
  return (
    <section className={styles.container}>
      <h2>without z-index</h2>
      <div>
        <p className={styles.foo}>I am a paragraph</p>
        <p className={styles.bar}>I am another paragraph</p>
        <p className={styles.baz}>I am a third paragraph</p>
      </div>

      <h2>with z-index</h2>
      <div className={styles.zindex}>
        <p className={styles.foo}>I am a paragraph</p>
        <p className={styles.bar}>I am another paragraph</p>
        <p className={styles.baz}>I am a third paragraph</p>
      </div>
    </section>
  );
};

export default ZIndex;
