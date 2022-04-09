import './App.css';

import PhoneBook from './App';

export default function App() {
    return (
        <div className="App">
            <PhoneBook element={<PhoneBook />} />
        </div>
    )
}
