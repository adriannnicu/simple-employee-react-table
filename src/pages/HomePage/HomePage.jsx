import React, { useState } from "react";
import EmployeeList from './components/EmployeeList';
import Header from "../components/Header";
import SearchBar from './components/SearchBar';

export default function HomePage({ onSelectEmployee }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const titleContent = 'Employee Directory';

    return (
        <div className="mt-4 w-96">
            <Header title={titleContent}/>
            <SearchBar onSearch={handleSearch} />
            <EmployeeList onSelectEmployee={onSelectEmployee} searchTerm={searchTerm} />
        </div>
    )
}