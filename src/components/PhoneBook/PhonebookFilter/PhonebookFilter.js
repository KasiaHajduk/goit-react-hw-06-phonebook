import './PhonebookFilter.css';

import { useDispatch } from 'react-redux';
import { onFilter } from 'redux/reducer';


export default function PhonebookFilter() {
    const dispatch = useDispatch();
    const onChange = event => {
        dispatch(onFilter(event.target.value));
    }

    return (
        <label className='pbfilter'>
            Find contacts by name
            <input className='pbfilter__input' type="text" onChange={onChange} />
        </label>
    );
}
