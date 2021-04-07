import React from "react";
import classnames from "classnames";
import styles from "./ResponsiveBackgroundImages.module.css";

const ResponsiveBackgroundImages = () => {
  return (
    <div>
      <h2>Responsive background images</h2>

      <section>
        <h3>Background: 100% 100%</h3>
        <div className={classnames(styles.kittenWrapper, styles.bg100)}>
          <p>
            This is a kitten with <code>background-size: 100% 100%</code>.
          </p>
        </div>
      </section>
      <section>
        <h3>Background: contain</h3>
        <div className={classnames(styles.kittenWrapper, styles.bgcontain)}>
          <p>
            This is a kitten with <code>background-size: contain</code>.
          </p>
        </div>
      </section>
      <section>
        <h3>Background: cover</h3>
        <div className={classnames(styles.kittenWrapper, styles.bgcover)}>
          <p>
            This is a kitten with <code>background-size: cover</code>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveBackgroundImages;
