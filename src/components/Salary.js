import React from 'react';
import '../App.css';

const Salary = (props) => {
  let adjustedSalaries = null;
  if (props.employee) {
    const {
      baseSalary,
      westCoastSalary,
      midWestSalary,
      eastCoastSalary,
    } = props.employee;

    // render the salary adjustments with the calculations retrieved from the request
    adjustedSalaries = (
      <div className='currency-container'>
        <div className='salary-label'>{baseSalary}</div>
        <div className='salary-label'>{westCoastSalary}</div>
        <div className='salary-label'>{midWestSalary}</div>
        <div className='salary-label'>{eastCoastSalary}</div>
      </div>
    );
  } else {
    // render a salary adjustments template
    adjustedSalaries = (
      <div className='currency-container'>
        <div className='salary-label'>$XX,XXX.XX</div>
        <div className='salary-label'>$XX,XXX.XX</div>
        <div className='salary-label'>$XX,XXX.XX</div>
        <div className='salary-label'>$XX,XXX.XX</div>
      </div>
    );
  }

  return (
    <div className='salary-container'>
      <div className='salary-header'>Salary Adjustment</div>
      <div className='regional-container'>
        <div className='salary-label'>Base</div>
        <div className='salary-label'>West Coast</div>
        <div className='salary-label'>Mid-West</div>
        <div className='salary-label'>East Coast</div>
      </div>
      {adjustedSalaries}
    </div>
  );
};

export default Salary;
