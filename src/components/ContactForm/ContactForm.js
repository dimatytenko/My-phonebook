import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { createMyToast } from '../../functions';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { phoneRegExp } from '../../libs/constants';

export default function ContactForm({ onClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const onSubmit = contact => dispatch(contactsOperations.addContact(contact));

  const handleSubmit = values => {
    const names = contacts.map(contact => contact.name);
    if (names.includes(values.name)) {
      createMyToast(`${values.name} is already in contacts!`);
      return;
    } else {
      onSubmit(values);
      onClose();
    }
  };

  const validationSchema = yup.object({
    name: yup
      .string('Enter contacts name')
      .min(3, `Name should be of minimum 3 characters`)
      .max(21, 'Name should be of maximum 21 characters')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    number: yup
      .string('Enter number phone')
      .matches(phoneRegExp, 'Phone number is not valid, type Ukraine')
      .required('Number phone is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <ContactPageIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="number"
                id="Number"
                label="Number"
                value={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
