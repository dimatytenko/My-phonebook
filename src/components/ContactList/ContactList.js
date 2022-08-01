import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactItem from 'components/ContactItem';
// import Loader from '../Loader';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(state =>
    contactsSelectors.getVisibleContacts(state),
  );

  const isLoading = useSelector(contactsSelectors.getLoading);
  return (
    <>
      {contacts.length > 0 && !isLoading && (
        <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {contacts.map(({ _id, name, number }) => (
            <Grid item xs={1} sm={1} md={1} key={_id}>
              <ContactItem id={_id} name={name} number={number}></ContactItem>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default ContactList;
