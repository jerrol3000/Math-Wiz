import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Signup, UserHome, Game } from './components';
import { me } from './store';

//TODO: Fix log in hacks

const Routes = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => !!state.user.id);
  const isLoggedIn = true


  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/game" component={Game} />

      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route path="/home" component={UserHome} />
        </Switch>
      )}
      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  );
};

export default Routes;
