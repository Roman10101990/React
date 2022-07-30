import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DepartmentList({ data }) {
  const loading = useSelector((state) => state.departments.loading);

  return (
    <div>
      {!loading ? (
        <>
          <ul>
            {data.map((el) => (
              <li key={el.id} className="d-grid gap-3 p-2 m-2 bg-light border">
                <Link to={`/departments/${el.id}/details`}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default DepartmentList;
