import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink className="nav_link" to="/register">
        Register
      </NavLink>
      <NavLink className="nav_link" to="/login">
        Login
      </NavLink>
    </>
  );
};
