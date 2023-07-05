import { useState } from 'react';
import css from './ContactForm.module.css';
import { BiUser } from 'react-icons/bi';
import { BsTelephone, BsEnvelope } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';

const notifyError = name => toast.error(`${name} is already in contacts`);

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [focusName, setFocusName] = useState('');
  const [focusNumber, setFocusNumber] = useState('');
  const [focusEmail, setFocusEmail] = useState('');
  const [focusBirthday, setFocusBirthday] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'birthday':
        setBirthday(value);
        break;
      default:
        break;
    }
  };

  const handleSabmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        el => el.Contact.first_name.toLowerCase() === name.toLowerCase()
      )
    ) {
      notifyError(name);
      return;
    }
    dispatch(addContact({ name, number, email }));
    setName('');
    setNumber('');
    setEmail('');
    setBirthday('');
  };

  const handleFocus = e => {
    if (e.currentTarget.name === 'name') setFocusName('name');
    if (e.currentTarget.name === 'number') setFocusNumber('number');
    if (e.currentTarget.name === 'email') setFocusEmail('email');
  };

  const handleBlur = e => {
    if (e.target.value === '' && e.target.name === 'name') setFocusName('');
    if (e.target.value === '' && e.target.name === 'number') setFocusNumber('');
    if (e.target.value === '' && e.target.name === 'email') setFocusEmail('');
  };

  return (
    <div className={css.login_content}>
      <form onSubmit={handleSabmit} className={css.form}>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusName === 'name' && css.focus
          }`}
        >
          <div className={css.i}>
            <BiUser className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Name</h5>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusNumber === 'number' && css.focus
          }`}
        >
          <div className={css.i}>
            <BsTelephone className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Number</h5>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              value={number}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusEmail === 'email' && css.focus
          }`}
        >
          <div className={css.i}>
            <BsEnvelope className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Email</h5>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusBirthday === 'email' && css.focus
          }`}
        >
          <div className={css.i}>
            <BsEnvelope className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Birthday</h5>
            <input
              type="birthday"
              name="birthday"
              required
              onChange={handleChange}
              value={birthday}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
