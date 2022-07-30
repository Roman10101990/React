import {
  getTotalSalaryDepartment,
  getAverageSalaryDepartment,
  getLowerAverageSalary,
} from "../../../services/SalaryService";

export default function SalaryBlock({ data }) {
  const lowerSalaryEmployee = getLowerAverageSalary(data);
  return (
    <div>
      Total department salary = {getTotalSalaryDepartment(data)} USD Average
      department salary = {getAverageSalaryDepartment(data)} USD
      <h3>
        List of employees with a salary lower than average in the department
      </h3>
      <>
        {lowerSalaryEmployee.map((el, ind) => (
          <li key={ind}>
            {el.firstName} {el.lastName}
          </li>
        ))}
      </>
    </div>
  );
}