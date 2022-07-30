function ShowDepartmentDetails({ data }) {
  return (
    <div className="dep--det--head">
      {data ? (
        <>
          <div> Name {data.name}</div>
          <div>Description {data.description}</div>
          <div>Head of department {data.headOfDepartment}</div>
        </>
      ) : null}
    </div>
  );
}

export default ShowDepartmentDetails;
