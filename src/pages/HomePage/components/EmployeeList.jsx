import React from "react";
import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList({ searchTerm, onSelectEmployee  }) {
    const employees = [
        {
          name: 'James King',
          avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
          role: 'President and CEO',
          email: 'jamesking@email.com',
          office: '781-000-0002',
          mobile: '617-000-0002',
          sms: '617-000-0002',
        },
        {
          name: 'Julie Taylor',
          avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
          role: 'VP of Marketing',
          email: 'julietaylor@email.com',
          office: '781-000-0002',
          mobile: '617-000-0002',
          sms: '617-000-0002',
        },
        {
          name: 'Eugene Lee',
          avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
          role: 'CFO',
          email: 'eugenelee@email.com',
          office: '781-000-0002',
          mobile: '617-000-0002',
          sms: '617-000-0002',
        },
        {
          name: 'John Williams',
          avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
          role: 'VP of Engineering',
          email: 'johnwilliams@email.com',
          office: '781-000-0002',
          mobile: '617-000-0002',
          sms: '617-000-0002',
        },
        {
          name: 'Ray Moore',
          avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
          role: 'VP of Sales',
          email: 'raymoore@email.com',
          office: '781-000-0002',
          mobile: '617-000-0002',
          sms: '617-000-0002',
        },
        {
          name: 'Paul Jones',
          avatar: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
          role: 'QA Manager',
          email: 'pauljones@email.com',
          office: '781-000-0002',
          mobile: '617-000-0002',
          sms: '617-000-0002',
        }
    ];

    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectEmployee = (employee) => {
      onSelectEmployee(employee);
    };


    return (
        <div className="border-2 border-purple-600 p-1 mt-1 flex flex-col gap-1">
          {filteredEmployees.length === 0 ? (
            <div className="text-center">No employee found.</div>
          ) : (
            filteredEmployees.map((employee, index) => (
              <EmployeeListItem key={index} employee={employee} onSelectEmployee={handleSelectEmployee}/>
            ))
          )}
        </div>
    )
}