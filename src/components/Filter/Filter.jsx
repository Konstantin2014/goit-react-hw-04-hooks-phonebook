import { Label, Input } from '../Filter/Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterHandleChange }) => {
 
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterHandleChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterHandleChange: PropTypes.func.isRequired,
};
