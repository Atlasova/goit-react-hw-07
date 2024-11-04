import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import { FaSquarePhone, FaUserLarge } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contentContainer}>
      <div className={css.content}>
        <p className={css.contactName}>
          <span className={css.userIcon}>
            <FaUserLarge size={16} />
          </span>
          {name}
        </p>
        <p className={css.contactPhone}>
          <span className={css.userIcon}>
            <FaSquarePhone size={16} />
          </span>
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
