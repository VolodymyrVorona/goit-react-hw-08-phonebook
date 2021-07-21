// import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { contactsOperations, contactsSelectors } from './redux/contacts';

// import Loader from 'react-loader-spinner';
// import ContactForm from './components/ContactForm';
// import ContactsList from './components/ContactList';
// import Filter from './components/Filter';
import Container from './components/Container';
import AppBar from './components/AppBar';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

// import st from './App.module.css';

function App() {
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

// function App({ fetchContacts, isLoading }) {
//   useEffect(() => {
//     fetchContacts();
//   }, [fetchContacts]);

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Filter />
//       <ContactsList />

//       {isLoading && (
//         <Loader type="Puff" color="#00BFFF" height={80} width={80} />
//       )}
//     </Container>
//   );
// }

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
