import './PhonebookList.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/reducer';

function PhonebookElement ({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className='pblist__item'>
      <p className='pblist__text'> * {name} &nbsp;&nbsp;&nbsp;&nbsp; {number}  </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

PhonebookElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

export default PhonebookElement;