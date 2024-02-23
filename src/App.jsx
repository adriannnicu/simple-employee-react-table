import './App.css'
import React, { useState } from 'react';
import HomePage from './pages/HomePage/HomePage'
import EmployeePage from './pages/HomePage/components/EmployeePage'

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDeselectEmployee = () => {
    setSelectedEmployee(null);
  };

  return (
    <>
      <div className="mt-4 flex justify-center gap-2">
        <HomePage onSelectEmployee={handleSelectEmployee} />
        {selectedEmployee && (
          <EmployeePage employee={selectedEmployee} onDeselectEmployee={handleDeselectEmployee} />
        )}
      </div>
    </>
  );
}

export default App
