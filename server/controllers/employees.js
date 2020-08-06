module.exports = {
  readEmployeeData: (req, res) => {
    // destructure the properties from the request body
    const {
      fullName,
      position,
      managersName,
      companyName,
      phone,
      salary,
      employed,
    } = req.body;

    // convert salary to a number as it is received as a string
    const regex = /[$,]/g;
    const salaryAsNum = Number(salary.replace(regex, ''));
    // create a object that will format numbers into US currency
    let currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    // calculate salaries based on location and format result into US currency
    const formattedBaseSalary = currencyFormatter.format(salaryAsNum);
    const formattedWestCoastSalary = currencyFormatter.format(
      salaryAsNum * 0.6,
    );
    const formattedMidWestSalary = currencyFormatter.format(salaryAsNum * 1.2);
    const formattedEastCoastSalary = currencyFormatter.format(
      salaryAsNum * 0.8,
    );

    // the employee payload
    const payload = {
      fullName,
      position,
      managersName,
      companyName,
      phone,
      baseSalary: formattedBaseSalary,
      westCoastSalary: formattedWestCoastSalary,
      midWestSalary: formattedMidWestSalary,
      eastCoastSalary: formattedEastCoastSalary,
      employed,
    };

    res.status(200).json(payload);
  },
};
