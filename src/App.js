import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

// import st from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
      </Switch>
    </Container>
  );
}

export default App;
