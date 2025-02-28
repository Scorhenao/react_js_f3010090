import { useState } from "react";

export const FormUser = ({ insertData }) => {
  const [document, setDocument] = useState(0);
  const [nameUser, setNameUser] = useState("");
  const [lastNameUser, setLastNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const save = (e) => {
    e.preventDefault();
    insertData({ document, nameUser, lastNameUser, email, status });
    setDocument(0);
    setNameUser("");
    setLastNameUser("");
    setEmail("");
    setStatus(false);
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={save}>
        <div className="mb-3">
          <label className="form-label">Document</label>
          <input
            onChange={(e) => setDocument(e.target.value)}
            type="number"
            className="form-control"
            name="document"
            value={document}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name of user</label>
          <input
            onChange={(e) => setNameUser(e.target.value)}
            type="text"
            className="form-control"
            name="name"
            value={nameUser}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last name of user</label>
          <input
            onChange={(e) => setLastNameUser(e.target.value)}
            type="text"
            className="form-control"
            name="lastName"
            value={lastNameUser}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            name="email"
            value={email}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            required
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <input className="btn btn-success col-12" type="submit" value="save" />
      </form>
    </div>
  );
};
