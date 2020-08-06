import React, { useState } from 'react';
import Card from './Card';
import Salary from './Salary';
import axios from 'axios'; // Promise based HTTP client for the browser and node.js

const Form = () => {
  // local state
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [managersName, setManagersName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [salary, setSalary] = useState('');
  const [employed, setEmployed] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [employee, setEmployee] = useState(null);

  /* 
  validates the salary form field
  - the field should be a positive number above 10000
  - the field also accepts the [$,.] characters
  */
  const validateSalary = () => {
    // regular expression to test that the salary value only contains numbers and/or the [$,.]characters
    let regex = /^\$?[1-9]\d*(((,\d{3}){0,})?(\.\d{0,})?)$/;
    if (!regex.test(salary)) {
      setErrMsg(
        'Please enter salary as a positive number or currency (e.g. 40000 or $40,000.00)',
      );
      return false;
    }

    regex = /[$,]/g;
    // remove the [$,] characters from the salary value and convert to number data type, then ensure the number is greater than 10000
    const salaryAsNum = Number(salary.replace(regex, ''));
    if (salaryAsNum <= 10000) {
      setErrMsg('Please enter salary above $10,000.00');
      return false;
    }

    return true;
  };

  /*
  handle form submission
  */
  const processInfo = () => {
    // if the salary value is valid proceed with asynchronous request to the server, otherwise assign an error message informing the user of the reason it is not valid
    let isValidSalary = validateSalary();
    if (isValidSalary) {
      setErrMsg('');
      axios
        .post('/employee-salary', {
          fullName,
          position,
          managersName,
          companyName,
          phone,
          salary,
          employed,
        })
        .then((res) => {
          if (res.status === 200) {
            // set local state of salary to the correctly formatted currency value
            setSalary(res.data.baseSalary);
            // set local state of employee to the data received from the form, including the salary adjustmments
            setEmployee(res.data);
          }
        });
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* form fields, checkbox, and submit button */}
      <div className='form-container'>
        <div className='input-container'>
          <span>Full Name</span>
          <input
            type='text'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <span>Job Title</span>
          <input
            type='text'
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <span>Manager's Name</span>
          <input
            type='text'
            value={managersName}
            onChange={(event) => setManagersName(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <span>Company Name</span>
          <input
            type='text'
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <span>Phone</span>
          <input
            type='text'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <span>Salary</span>
          <input
            type='text'
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>
        {errMsg && <div className='error'>{errMsg}</div>}
        <div className='checkbox-container'>
          <div style={{ width: '57%' }}>
            <span>Currently Employed</span>
          </div>
          <div className='checkbox'>
            <input
              type='checkbox'
              value={employed}
              checked={employed}
              onChange={(event) =>
                setEmployed(event.target.value === 'false' ? true : false)
              }
            />
          </div>
        </div>
        <div className='button-container'>
          <button className='button' onClick={() => processInfo()}>
            Process Info
          </button>
        </div>
      </div>

      {/* render the business card and salary adjustments   */}
      <div className='process-info-container'>
        <Card employee={employee} /> {/* child component */}
        <Salary employee={employee} /> {/* child component */}
      </div>
    </div>
  );
};

export default Form;
