import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from 'redux/filter/filter';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import { FilterContactsInput } from './filterContacts.styled';

export default function FilterContacts({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className="filter-wrapper">
      <h3>{title}</h3>
      <FilterContactsInput
        className="input-field filter"
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
}

FilterContacts.propTypes = {
  title: PropTypes.string.isRequired,
};
