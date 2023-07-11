import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from 'redux/auth/operations';
import  css  from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch()
  const {user}=useAuth()
    return (
      <>
        <button
          className={css.btn}
          type="button"
          onClick={
            () => {
              dispatch(logOut());
            }
          }
        >
          Logout
        </button>
        <p className={css.user}> <img className={css.avatar} src={user.avatar} alt={ user.username } /> {user.email}</p>
      </>
    );
}