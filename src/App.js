import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

import route from './route';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <PublicRoute exact path={route.home} component={HomeView} />

        <PublicRoute
          path={route.register}
          component={RegisterView}
          restricted
          redirectTo={route.contacts}
        />

        <PublicRoute
          path={route.login}
          component={LoginView}
          restricted
          redirectTo={route.contacts}
        />

        <PrivateRoute
          path={route.contacts}
          component={ContactsView}
          redirectTo={route.login}
        />
        <PublicRoute component={HomeView} />
      </Switch>
    </Container>
  );
}

export default App;
