import React from "react";
import styles from "./cssanimation.module.css";

const CSSAnimation = () => {
  return (
    <section className={styles.container}>
      <h2>Animated Box</h2>
      <div className={styles.box}>&nbsp;</div>
    </section>
  );
};

export default CSSAnimation;
