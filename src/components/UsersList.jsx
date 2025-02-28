import "./StyleComponents.css";

export const UsersList = ({ dataUsers }) => {
  const renderStatus = (status) => {
    console.log(status);
    
    if (status === 'true') {
      return <span className="btn btn-success">Active</span>;
    } else {
      return <span className="btn btn-danger">Inactive</span>;
    }
  };
  return (
    <>
      <h2>List of users</h2>
      <table className="table bordered">
        <thead>
          <tr>
            <th>Document</th>
            <th>Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((element) => (
            <tr>
              <td>{element.document}</td>
              <td>{element.nameUser}</td>
              <td>{element.lastNameUser}</td>
              <td>{element.email}</td>
              {renderStatus(element.status)}
              <td>
                <button className="btn btn-success btn-sm">edit</button>
                <button className="btn btn-danger btn-sm">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
