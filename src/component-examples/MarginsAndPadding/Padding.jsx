import React from "react";
import styles from "./marginsandpadding.module.css";

const Margins = () => {
  return (
    <section className={styles.container}>
      <h2>Padding</h2>
      <div className={styles.paddingDiv1}>div 1</div>
      <div className={styles.paddingDiv2}>div 2</div>
      <div className={styles.paddingDiv3}>div 3</div>
      <div className={styles.paddingDiv4}>div 4</div>
      <div className={styles.paddingDiv5}>div 5</div>
    </section>
  );
};

export default Margins;
