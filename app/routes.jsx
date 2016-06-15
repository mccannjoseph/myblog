import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import AddPost from 'containers/AddPost';
import Home from 'containers/Home';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <Route path="add-post" component={AddPost} />
      <IndexRoute component={Home} />
    </Route>
  );
};
