import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDepartmentById } from "../../../store/Departments/DepartmentsThunks";
import ShowDepartmentDetails from "./ShowDepartmentDetails";

function DepartmentDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const department = useSelector((state) => state.departments.department);
  const loading = useSelector((state) => state.departments.loading);

  useEffect(() => {
    dispatch(getDepartmentById(id));
  }, [dispatch]);

  return (
    <div>
      {!loading ? (
        <>
          <ShowDepartmentDetails data={department} />
          <Link to={`/departments/${id}/edit`} className="btn btn-primary m-4">
            Edit Department
          </Link>
          <Link
            to={`/departments/${id}/employees`}
            className="btn btn-primary m-4"
          >
            Show Employees
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default DepartmentDetails