import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import JsFundamentals from "./component-examples/JsFundamentals/JsFundamentals.jsx";
import HelloUser from "./component-examples/HelloUser/HelloUser.jsx";
import HelloUserClass from "./component-examples/HelloUser/HelloUserClass.jsx";
import AddingMachine from "./component-examples/AddingMachine/AddingMachine.jsx";
import AddingMachineHooks from "./component-examples/AddingMachine/AddingMachineHooks.jsx";
import List from "./component-examples/List.jsx";
import CSSModule from "./component-examples/CSSModule/CSSModule.jsx";
import CSSModule2 from "./component-examples/CSSModule2/CSSModule2.jsx";
import Edgar from "./component-examples/EdgarAllenPoe/EdgarAllenPoeArticle.jsx";
import Gradients from "./component-examples/Gradients/Gradients.jsx";
import BoxShadows from "./component-examples/BoxShadows/BoxShadows.jsx";
import CSSAnimation from "./component-examples/CSSAnimation/CSSAnimation.jsx";
import ZIndex from "./component-examples/ZIndex/ZIndex.jsx";
import AbsolutePositioning from "./component-examples/AbsolutePositioning/AbsolutePositioning.jsx";
import MarginsAndPadding from "./component-examples/MarginsAndPadding/MarginsAndPadding.jsx";
import Columns from "./component-examples/Columns/Columns.jsx";
import Flexbox from "./component-examples/Flexbox/Flexbox.jsx";
import Grid from "./component-examples/Grid/Grid.jsx";

import styles from "./component-examples/examples.module.css";

const App = (props) => {
  let { url } = useRouteMatch();
  console.log("url", url)

  const users = [
    {
      name: "April Bingham",
      id: 1,
    },
    {
      name: "Tom Cruise",
      id: 2,
    },
    {
      name: "Mickey Mouse",
      id: 3,
    },
    {
      name: "Beyonce",
      id: 4,
    },
  ];

  return (
    <div className="Demo">
      <header>
        <nav>
          <ul className={styles.list}>
            {/* these links should show you how to connect up a link to a specific route */}
            <li className={styles.listItem}>
              <Link to={`${url}concepts`}>Javascript Fundamentals</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}hello-user`}>Hello User</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}hello-user-class`}>Hello User (class)</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}adding`}>Adding Machine</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}adding-hooks`}>Adding Machine (hooks)</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}list`}>List</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}cssmodules`}>CSS Modules</Link>
            </li>{" "}
            <li className={styles.listItem}>
              <Link to={`${url}edgar`}>Edgar Allen Poe</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}margins-padding`}>Margins and Padding</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}absolute-positioning`}>Absolute positioning</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}z-index`}>Z-index</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}gradients`}>Gradients</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}box-shadows`}>Box Shadows</Link>
            </li>
            <li className={styles.listItem}>
              <Link to={`${url}css-animation`}>CSS Animation</Link>
            </li>        
            <li className={styles.listItem}>
              <Link to={`${url}columns`}>Columns</Link>
            </li>        
            <li className={styles.listItem}>
              <Link to={`${url}flexbox`}>Flexbox</Link>
            </li>        
            <li className={styles.listItem}>
              <Link to={`${url}grid`}>Grid</Link>
            </li>        
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* passing parameters via a route path */}
        <Route path={`${url}concepts`}>
          <JsFundamentals />
        </Route>
        <Route path={`${url}hello-user`} exact>
          <HelloUser user={users[0]} />
        </Route>
        <Route path={`${url}hello-user-class`} exact>
          <HelloUserClass user={users[0]} />
        </Route>{" "}
        <Route path={`${url}adding`} exact>
          <AddingMachine startNum={10}>This Is My Adding Machine</AddingMachine>
        </Route>
        <Route path={`${url}adding-hooks`} exact>
          <AddingMachineHooks startNum={10}>
            This Is My Adding Machine
          </AddingMachineHooks>
        </Route>
        <Route path={`${url}list`} exact>
          <List list={users} />
        </Route>
        <Route path={`${url}cssmodules`} exact>
          <>
            <CSSModule />
            <CSSModule2 />
          </>
        </Route>
        <Route path={`${url}edgar`} exact>
          <Edgar />
        </Route>
        <Route path={`${url}gradients`} exact>
          <Gradients />
        </Route>
        <Route path={`${url}box-shadows`} exact>
          <BoxShadows />
        </Route>
        <Route path={`${url}css-animation`} exact>
          <CSSAnimation />
        </Route>
        <Route path={`${url}z-index`} exact>
          <ZIndex />
        </Route>
        <Route path={`${url}absolute-positioning`} exact>
          <AbsolutePositioning />
        </Route>
        <Route path={`${url}margins-padding`} exact>
          <MarginsAndPadding />
        </Route>
        <Route path={`${url}columns`} exact>
          <Columns />
        </Route>
        <Route path={`${url}flexbox`} exact>
          <Flexbox />
        </Route>
        <Route path={`${url}grid`} exact>
          <Grid />
        </Route>
        <Route
          path={`${url}baz/:someId`}
          render={({ match, location, history }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("match", match);
            console.log("location", location);
            console.log("history", history);
            return <div>Hello, someId equals {match.params.someId}</div>
          }}
        />
        <Route path={`${url}`}>
          <div>Welcome</div>
        </Route>
        <Route>
          <div>Error</div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
