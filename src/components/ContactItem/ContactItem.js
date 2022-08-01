import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li>
      <Card sx={{ padding: '8px' }}>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {number}
        </Typography>

        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        >
          Delete
        </Button>
      </Card>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
