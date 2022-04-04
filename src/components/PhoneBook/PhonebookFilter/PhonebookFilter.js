import './PhonebookFilter.css';

export default function PhonebookFilter({ value, onChange }) {
    return (
        <label className='pbfilter'>
            Find contacts by name
            <input className='pbfilter__input' type="text" value={value} onChange={onChange} />
        </label>
    );
}
