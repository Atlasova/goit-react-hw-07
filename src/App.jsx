import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading, selectError } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="componentsContainer">
        <div>
          <ContactForm />
        </div>
        <div className="searchContainer">
          <SearchBox />
          <ContactList />
          {loading && <h1>Loading...</h1>}
          {error && <h1>Something went wrong!</h1>}
        </div>
      </div>
    </>
  );
}
