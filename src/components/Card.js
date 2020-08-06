import React from 'react';
import '../App.css';

const Card = (props) => {
  if (props.employee) {
    const {
      fullName,
      position,
      managersName,
      companyName,
      phone,
      baseSalary,
      employed,
    } = props.employee;

    let employeeStatus = '';
    // employee status will only render if a company name is also included
    if (companyName)
      employeeStatus = employed ? 'Current Employee of' : 'Former Employee of';
    const phoneNum = phone ? `Phone: ${phone}` : '';
    const manager = managersName ? `Manager: ${managersName}` : '';

    // render the business card with the data retrieved from the form fields
    return (
      <div className='card-container'>
        <div className='general-label'>{employeeStatus.toUpperCase()}</div>
        <div className='company-header'>{companyName.toUpperCase()}</div>
        <div className='general-label'>{phoneNum.toUpperCase()}</div>
        <div className='name-label top-margin'>{fullName.toUpperCase()}</div>
        <div className='general-label '>{position.toUpperCase()}</div>
        <div className='general-label bottom-margin'>{`SALARY: ${baseSalary}`}</div>
        <div className='general-label'>{manager.toUpperCase()}</div>
      </div>
    );
  } else {
    // render a business card template
    return (
      <div className='card-container'>
        <div className='company-header'>COMPANY NAME</div>
        <div className='general-label'>PHONE</div>
        <div className='name-label top-margin'>FULL NAME</div>
        <div className='general-label'>JOB TITLE</div>
        <div className='general-label bottom-margin'>SALARY</div>
        <div className='general-label'>MANAGER'S NAME</div>
      </div>
    );
  }
};

export default Card;
