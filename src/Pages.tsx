import * as React from 'react';

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

interface ParamType {
  topicId: string;
}

export const Home = () => {
  return <h2>Home</h2>;
};

export const About = () => {
  return <h2>About</h2>;
};

export const Users = () => {
  return <h2>Users</h2>;
};

export function Topic() {
  let { topicId } = useParams<ParamType>();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export function Topics() {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
