import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ClipLoader } from 'react-spinners'; 

import css from '../../components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const [focusEmail, setFocusfocusEmail] = useState('');
  const [focusPassword, setFocusPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        username: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleFocus = e => {
    if (e.currentTarget.name === 'email') setFocusfocusEmail('email');
    if (e.currentTarget.name === 'password') setFocusPassword('password');
  };

  const handleBlur = e => {
    if (e.target.value === '' && e.target.name === 'email')
      setFocusfocusEmail('');
    if (e.target.value === '' && e.target.name === 'password')
      setFocusPassword('');
  };

  return (
    <div className={css.login_content}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
        <h2 className={css.title}>Welcome</h2>
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
        <button type="submit" className={css.btn} disabled={isLoading}>
          {isLoading ? (
            <ClipLoader color="#ffffff" loading={true} size={20} />
          ) : (
            'Log In'
          )}
        </button>
      </form>
    </div>
  );
};
