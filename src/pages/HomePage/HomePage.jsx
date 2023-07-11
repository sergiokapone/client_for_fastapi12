import { Link } from "react-router-dom"
import css from './HomePage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { refreshUser } from "redux/auth/operations";
import { selectUser } from 'redux/auth/selectors';


export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const user = useSelector(selectUser)

  return (
    <div className={css.content}>
      <h2 className={css.title}>Phonebook </h2>
      <Link className={css.btn} to="/register">
        Registration
      </Link>
      <p className={css.text}>or</p>
      <Link className={css.btn} to="/login">
        Login
      </Link>
      <img src={user.avatar} alt={ user.username } />
    </div>
  );
}