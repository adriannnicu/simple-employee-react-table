import Header from "../../components/Header";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
export default function EmployeePage({ employee, onDeselectEmployee }) {

  const titleContent = 'Employee';

  return (
    <div className="mt-4 w-96 space-y-1">
      <Header title={titleContent}/>
      <div className="border-2 p-2 space-y-1">
        <div className="flex border-2 p-2">
          <img src={employee.avatar} alt="" className="w-24"/>
          <div className="flex flex-col justify-center ml-2">
            <p className="font-semibold">{employee.name}</p>
            <p className="text-sm text-gray-400">{employee.role}</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-2">
          <div>
            <p className="font-semibold">Call Office</p>
            <p className="text-sm text-gray-400">{employee.office}</p>
          </div>
          <div>
            <ChevronRightIcon className="w-8 text-gray-400"/>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-2">
          <div>
            <p className="font-semibold">Call Mobile</p>
            <p className="text-sm text-gray-400">{employee.mobile}</p>
          </div>
          <div>
            <ChevronRightIcon className="w-8 text-gray-400"/>
          </div>
        </div>

        <div className="flex items-center justify-between border-2 p-2">
          <div>
            <p className="font-semibold">SMS</p>
            <p className="text-sm text-gray-400">{employee.sms}</p>
          </div>
          <div>
            <ChevronRightIcon className="w-8 text-gray-400"/>
          </div>
        </div>

        <div className="flex items-center justify-between border-2 p-2">
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-400">{employee.email}</p>
          </div>
          <div>
            <ChevronRightIcon className="w-8 text-gray-400"/>
          </div>
        </div>
      </div>
    </div>  
  )
}