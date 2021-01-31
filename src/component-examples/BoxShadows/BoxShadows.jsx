import React from "react";
import styles from "./boxshadows.module.css";

const BoxShadows = () => {
  return (
    <section className={styles.container}>
      <h2>Box Shadows</h2>
      <div className={styles.shadowZeroOffset}>Zero offset</div>
      <div className={styles.shadowPositivePositive}>
        Positive horizontal and vertical
      </div>
      <div className={styles.shadowPositiveNegative}>
        Positive horizontal, negative vertical
      </div>
      <div className={styles.shadowNegativePositive}>
        Negative horizontal, positive vertical
      </div>
      <div className={styles.shadowNegativeNegative}>
        Negative horizontal, negative vertical
      </div>
      <div className={styles.shadowZeroBlur}>Zero blur</div>
      <div className={styles.shadowZeroSpread}>Zero spread</div>
      <div className={styles.shadowColor}>Color with .5 opacity</div>
      <div className={styles.shadowInset}>Inset shadow</div>
      <div className={styles.shadowMultiple}>Multiple shadows</div>
    </section>
  );
};

export default BoxShadows;
