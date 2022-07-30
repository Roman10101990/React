import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getEmployees } from "../../../store/Employees/EmployeesThunks";
import EmployeesList from "./EmployeesList";
import SalaryBlock from "./SalaryBlock";

function Employees() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const loading = useSelector((state) => state.employees.loading);

  useEffect(() => {
    dispatch(getEmployees(id));
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <Link to={`/departments/${id}/employees/add`}>
            <button className="btn btn-primary m-4">Add employee</button>
          </Link>

          <div className="divList">
            <EmployeesList data={employees} />
            <SalaryBlock data={employees} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Employees