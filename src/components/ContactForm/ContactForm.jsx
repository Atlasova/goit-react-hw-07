import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContacts(newContact));
    resetForm();
  };

  const ContactFormSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('This field is required!'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('This field is required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.fieldTitle}>Name</label>
        <Field
          type="text"
          name="name"
          className={css.formField}
          placeholder="Enter new contact name"
        />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />
        <label className={css.fieldTitle}>Phone</label>
        <Field
          type="text"
          name="number"
          className={css.formField}
          placeholder="Enter new contact phone"
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
