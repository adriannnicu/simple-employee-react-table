import React from "react";
import { useState } from "react";
import EmployeePage from "./EmployeePage";
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function EmployeeListItem( {employee, onSelectEmployee } ) {
  

    const handleClick = () => {
        onSelectEmployee(employee);
    };
    return (
        <>
            <div className="border-2 border-red-600 p-1 flex justify-between items-center">
                <div className="flex">
                    <img src={employee.avatar} alt="" className="w-16 h-16"/>
                    <div className="flex flex-col justify-center ml-2">
                        <p className="font-semibold">{employee.name}</p>
                        <p className="text-sm text-gray-400">{employee.role}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleClick}><ChevronRightIcon className="w-8 text-gray-500 hover:text-gray-800"/></button>
                </div>
            </div>
        </>
    )
}