import './App.css';

import PhoneBook from './PhoneBook';

export default function App() {
    return (
        <div className="App">
            <PhoneBook element={<PhoneBook />} />
        </div>
    )
}
