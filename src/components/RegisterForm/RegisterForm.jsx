import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import css from './RegisterForm.module.css';
import { useState } from 'react';

export const RegisterForm = () => {
  const [focusEmail, setFocusfocusEmail] = useState('');
  const [focusPassword, setFocusPassword] = useState('');
  const [focusName, setFocusName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleFocus = e => {
    if (e.currentTarget.name === 'email') setFocusfocusEmail('email');
    if (e.currentTarget.name === 'password') setFocusPassword('password');
    if (e.currentTarget.name === 'name') setFocusName('name');
  };
  const handleBlur = e => {
    if (e.target.value === '' && e.target.name === 'email')
      setFocusfocusEmail('');
    if (e.target.value === '' && e.target.name === 'password')
      setFocusPassword('');
    if (e.target.value === '' && e.target.name === 'name') setFocusName('');
  };

  return (
    <div className={css.login_content}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
        <h2 className={css.title}>Welcome</h2>
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div}  ${css.one} ${
            focusEmail === 'email' && css.focus
          }`}
        >
          <div className={css.i}>
            <HiOutlineMail className={css.before} />
            <i className={`${css.fas} ${css.fa_user}`}></i>
          </div>
          <div className={css.div}>
            <h5>Email</h5>

            <input
              type="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusPassword === 'password' && css.focus
          }`}
        >
          <div className={css.i}>
            <RiLockPasswordLine className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Password</h5>
            <input
              type="password"
              name="password"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </form>
    </div>
  );
};
