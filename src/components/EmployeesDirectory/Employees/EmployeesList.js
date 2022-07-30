import { Link, useParams } from "react-router-dom";

function EmployeesList({ data }) {
  const { id } = useParams();
  return (
    <div>
      {data && (
        <>
          <ul>
            {data.map((el) => (
              <li key={el.id}>
                <div className="mb-4">
                  <div>
                    <span className="text-info h5">Name</span> {el.firstName}{" "}
                    {el.lastName}
                  </div>
                  <div>
                    <span className="text-info h5 ">Date</span> of birth{" "}
                    {el.dateOfBirth}
                  </div>
                  <div>
                    <span className="text-info h5">Email</span> {el.email}
                  </div>
                  <div>
                    <span className="text-info h5">Salary</span> {el.salary}
                  </div>

                  <Link to={`/departments/${id}/employees/${el.id}/edit`}>
                    <button className="btn btn-primary m-4">
                      Edit employee
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default EmployeesList;