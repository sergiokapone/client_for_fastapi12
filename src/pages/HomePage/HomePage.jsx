import { Link } from "react-router-dom"
import css from './HomePage.module.css'

export const HomePage = () => {
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
    </div>
  );
}