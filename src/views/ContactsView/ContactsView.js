import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import { ContactsWrapper, ContactsControlls } from './ContactsView.styled';

export default function ContactsView() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <ContactsWrapper>
      <Typography
        component="h1"
        variant="string"
        color={theme => theme.colors.bodyPrimary}
        sx={{ fontSize: { xs: '45px', md: '65px' }, mb: '20px' }}
      >
        Phonebook
      </Typography>
      <ContactsControlls>
        <Button variant="outlined" size="large" onClick={toggleModal}>
          Add contact
        </Button>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm onClose={toggleModal} />
          </Modal>
        )}

        <Filter />
      </ContactsControlls>

      <ContactList />
    </ContactsWrapper>
  );
}
