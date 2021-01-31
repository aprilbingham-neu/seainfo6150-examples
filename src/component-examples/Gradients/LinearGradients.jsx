import React from "react";
import styles from "./gradients.module.css";

const LinearGradients = () => {
  return (
    <section className={styles.container}>
      <h2>Linear Gradients</h2>
      <h3 className={styles.linearGradient}>Top to bottom gradient</h3>
      <h3 className={styles.linearGradientLTR}>Left to right gradient</h3>
      <h3 className={styles.linearGradientTopLeftBottomRight}>
        Diagonal gradient
      </h3>
      <h3 className={styles.linearGradientTopRightBottomLeft}>
        Diagonal gradient
      </h3>
      <h3 className={styles.linearGradientRainbow}>4 color gradient</h3>
      <h3 className={styles.linearGradientColorStop}>
        Gradient with color stop
      </h3>
      <h3 className={styles.linearGradientColorStopLine}>
        Gradient with color stop line
      </h3>
    </section>
  );
};

export default LinearGradients;
