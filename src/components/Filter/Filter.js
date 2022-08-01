import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { contactsReducer } from '../../redux/contacts';

function Filter() {
  const dispatch = useDispatch();
  const { filter } = contactsReducer;

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        label="Find contact by name..."
        type="search"
        onChange={event => dispatch(filter(event.currentTarget.value))}
      />
    </Box>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onhChange: PropTypes.func,
};

export default Filter;
