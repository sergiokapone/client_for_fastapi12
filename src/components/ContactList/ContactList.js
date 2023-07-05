import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.first_name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <table className={css.contactTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => {
            const { id, first_name, last_name, phone_number, email, birthday } =
              contact;
            return (
              <tr className={css.contactRow} key={id}>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{phone_number}</td>
                <td>{email}</td>
                <td>{birthday}</td>
                <td>
                  <button
                    className={css.btn}
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
