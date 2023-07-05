import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { getFilterValue } from 'redux/contacts/selectors';
import { BiFilterAlt } from 'react-icons/bi';
import css from './Filter.module.css';

export const Filter = () => {
  const [focus, setFocus] = useState('');
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleFilterChenge = e => {
    const value = e.target.value;
    dispatch(filterContacts(value));
  };
  const handleFocus = e => {
    if (e.currentTarget.name === 'filter') setFocus('filter');
    
  };
  const handleBlur = () => {
    setFocus('');
  };
  return (
    <div className={css.login_content}>
      <div className={css.form}>
        <div
          className={`${css.input_div} ${css.pass} ${
            focus === 'filter' && css.focus
          }`}
        >
          <div className={css.i}>
            <BiFilterAlt className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Find contacts by name</h5>
            <input
              type="text"
              name="filter"
              value={filterValue}
              onChange={handleFilterChenge}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

