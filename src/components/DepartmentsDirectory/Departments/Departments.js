import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDepartments } from "../../../store/Departments/DepartmentsThunks";
import DepartmentList from "./DepartmentList";

function Departments() {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const loading = useSelector((state) => state.departments.loading);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  return (
    <div>
      {!loading ? (
        <>
          <DepartmentList data={departments} />
          <Link to="/departments/add">
            <button className='btn btn-primary m-4"'>Add department</button>
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default Departments;
