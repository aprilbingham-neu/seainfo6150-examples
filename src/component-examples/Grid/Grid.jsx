import React from "react";
import styles from "./Grid.module.css";
import classnames from "classnames";

const Grid = () => {
  return (
    <>
      <h2>Grid</h2>
      <div class={classnames(styles.container)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Fixed rows</h2>
      <div class={classnames(styles.container, styles.fixedRowsContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Fixed cols</h2>
      <div class={classnames(styles.container, styles.fixedColsContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>FR units</h2>
      <div class={classnames(styles.container, styles.frUnitsContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Auto rows</h2>
      <div class={classnames(styles.container, styles.autoRowsContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Repeat</h2>
      <div class={classnames(styles.container, styles.repeatContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Minmax</h2>
      <div class={classnames(styles.container, styles.minMaxContainer)}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Row gap</h2>
      <div class={classnames(styles.container, styles.rowGapContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Col gap</h2>
      <div class={classnames(styles.container, styles.colGapContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Gap</h2>
      <div class={classnames(styles.container, styles.gapContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Equal Gap</h2>
      <div class={classnames(styles.container, styles.equalGapContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Position via line numbers</h2>
      <div class={classnames(styles.container, styles.lineNumbersContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Align items stretch</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,
          styles.alignContainer,
          styles.alignContentStretchContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align items start</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignItemsStartContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align items end</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignItemsEndContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align items center</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignItemsCenterContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify items stretch</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,
          styles.justifyContainer,
          styles.justifyItemsStretchContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify items start</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyItemsStartContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify items end</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyItemsEndContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify items center</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyItemsCenterContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content stretch</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,
          styles.alignContainer,
          styles.alignContentStretchContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content start</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignContentStartContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content end</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignContentEndContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content center</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignContentCenterContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content space-between</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignContentBetweenContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content space-around</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignContentAroundContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Align content space-evenly</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.alignContainer,
          styles.alignContentEvenlyContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content stretch</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,
          styles.justifyContainer,
          styles.justifyContentStretchContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content start</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyContentStartContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content end</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyContentEndContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content center</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyContentCenterContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content space-between</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyContentBetweenContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content space-around</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyContentAroundContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <h2>Justify content space-evenly</h2>
      <div
        class={classnames(
          styles.container,
          styles.tallContainer,

          styles.justifyContainer,
          styles.justifyContentEvenlyContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
    </>
  );
};

export default Grid;
