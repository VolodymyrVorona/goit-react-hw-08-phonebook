import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { contactsOperations, contactsSelectors } from './redux/contacts';
import HomeView from './views/HomeView/HomeView';

// import st from './App.module.css';

function App({ fetchContacts, isLoading }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <Container>
      <AppBar />
      <HomeView />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />

      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
