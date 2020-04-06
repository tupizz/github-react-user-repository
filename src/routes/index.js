import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import User from '../pages/User';
import Main from '../pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users/:username" component={User} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
