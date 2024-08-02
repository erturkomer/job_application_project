import React, { useState } from 'react';
import './App.css';
import IlanList from '../components/IlanList';
import IlanDetayi from '../components/IlanDetayi';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <h1>İş İlan Portalı</h1>
                <Header searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
                <Routes>
                    <Route path="/" element={<IlanList searchQuery={searchQuery} />} />
                    <Route path="/ilanDetayi/:id" element={<IlanDetayi />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const Header = ({ searchQuery, handleSearchChange }) => {
    const location = useLocation();

    // Only show the search box on the home page
    const showSearchBox = location.pathname === '/';

    return (
        <div className="header">
            {showSearchBox && (
                <div className="arama_kutusu">
                    <input
                        type="text"
                        placeholder="İş İlanı Arayın"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
