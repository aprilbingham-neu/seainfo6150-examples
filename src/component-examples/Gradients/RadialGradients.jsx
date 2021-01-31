import React from "react";
import styles from "./gradients.module.css";

const RadialGradients = () => {
  return (
    <section className={styles.container}>
      <h2>Radial Gradients</h2>
      <h3 className={styles.radialGradient}>Centered gradient</h3>
      <h3 className={styles.radialGradientCircle}>Circular gradient</h3>
      <h3 className={styles.radialGradientRainbow}>4 color gradient</h3>
      <h3 className={styles.radialGradientTopRight}>
        Circular gradient at top right
      </h3>
      <h3 className={styles.radialGradientColorStopLine}>
        Circular gradient with color stop line
      </h3>
    </section>
  );
};

export default RadialGradients;
