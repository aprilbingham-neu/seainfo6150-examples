import React from "react";
import styles from "./Flexbox.module.css";
import classnames from "classnames";

const Flexbox = () => {
  return (
    <>
      <h2>Wrap</h2>
      <div class={classnames(styles.container, styles.wrapContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>No wrap</h2>

      <div class={classnames(styles.container, styles.noWrapContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Reverse</h2>

      <div class={classnames(styles.container, styles.reverseContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Wrap Reverse</h2>

      <div class={classnames(styles.container, styles.wrapReverseContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Justify start</h2>

      <div class={classnames(styles.container, styles.justifyStartContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Justify end</h2>

      <div class={classnames(styles.container, styles.justifyEndContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Justify center</h2>

      <div class={classnames(styles.container, styles.justifyCenterContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Justify space-around</h2>

      <div class={classnames(styles.container, styles.justifyAroundContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Justify space-between</h2>

      <div class={classnames(styles.container, styles.justifyBetweenContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Justify space-evenly</h2>

      <div class={classnames(styles.container, styles.justifyEvenlyContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Align items start</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignItemsStartContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align items center</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignItemsCenterContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align items baseline</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignItemsBaselineContainer,
          styles.tallContainer
        )}
      >
        <div>
          <span style={{ fontSize: "50px" }}>1</span>
        </div>
        <div>2</div>
        <div>
          <span style={{ fontSize: "80px" }}>3</span>
        </div>
        <div>
          <span style={{ fontSize: "150px" }}>4</span>
        </div>
        <div>5</div>
      </div>
      <h2>Align items stretch</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignItemsStretchContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align content start</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignContentStartContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align content end</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignContentEndContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align content center</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignContentCenterContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align content space-around</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignContentAroundContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align content space-between</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignContentBetweenContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Align content stretch</h2>

      <div
        class={classnames(
          styles.container,
          styles.alignContentStretchContainer,
          styles.tallContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex ordering</h2>

      <div class={classnames(styles.container)}>
        <div className={styles.one}>1</div>
        <div className={styles.two}>2</div>
        <div className={styles.three}>3</div>
        <div className={styles.four}>4</div>
        <div className={styles.five}>5</div>
      </div>

      <h2>Flex grow</h2>

      <div class={classnames(styles.container, styles.growContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex grow last child</h2>

      <div class={classnames(styles.container, styles.growContainer, styles.growLastChildContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex grow third child</h2>

      <div class={classnames(styles.container, styles.growContainer, styles.growThirdChildContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Flex grow all children</h2>

      <div
        class={classnames(styles.container, styles.growContainer, styles.growAllChildrenContainer)}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex grow multi children</h2>

      <div
        class={classnames(styles.container, styles.growContainer, styles.growMultiChildrenContainer)}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex shrink</h2>

      <div class={classnames(styles.container, styles.shrinkContainer)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Flex shrink zero</h2>

      <div
        class={classnames(
          styles.container,
          styles.shrinkContainer,
          styles.shrinkZeroContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex shrink last child</h2>

      <div
        class={classnames(
          styles.container,
          styles.shrinkContainer,
          styles.shrinkLastChildContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex shrink third child</h2>

      <div
        class={classnames(
          styles.container,
          styles.shrinkContainer,
          styles.shrinkThirdChildContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2>Flex shrink all children</h2>

      <div
        class={classnames(
          styles.container,
          styles.shrinkContainer,
          styles.shrinkAllChildrenContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex shrink multi children</h2>

      <div
        class={classnames(
          styles.container,
          styles.shrinkContainer,
          styles.shrinkMultiChildrenContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Flex basis</h2>

      <div
        class={classnames(
          styles.container,
          styles.basisContainer,
          styles.tallContainer,
          styles.basisAlignSelfContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Align self flex-start</h2>

      <div
        class={classnames(
          styles.container,
          styles.basisContainer,

          styles.tallContainer,
          styles.basisAlignSelfStartContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Align self center</h2>

      <div
        class={classnames(
          styles.container,
          styles.basisContainer,

          styles.tallContainer,
          styles.basisAlignSelfCenterContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Align self flex-end</h2>

      <div
        class={classnames(
          styles.container,
          styles.basisContainer,

          styles.tallContainer,
          styles.basisAlignSelfEndContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <h2>Align self baseline</h2>

      <div
        class={classnames(
          styles.container,
          styles.basisContainer,

          styles.tallContainer,
          styles.basisAlignSelfBaselineContainer
        )}
      >
        <div>
          <span style={{ fontSize: "50px" }}>1</span>
        </div>
        <div>2</div>
        <div>
          <span style={{ fontSize: "80px" }}>3</span>
        </div>
        <div>
          <span style={{ fontSize: "150px" }}>4</span>
        </div>
        <div>5</div>
      </div>

      <h2>Align self stretch</h2>

      <div
        class={classnames(
          styles.container,
          styles.basisContainer,

          styles.tallContainer,
          styles.basisAlignSelfStretchContainer
        )}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </>
  );
};

export default Flexbox;
