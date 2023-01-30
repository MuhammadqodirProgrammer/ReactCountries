import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
export const Users = () => {
  const [users, setUsers] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });

  const getUsers = () => {
    setUsers({
      ...users,
      isLoading: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        if (data.status === 200) {
          setUsers({
            ...Users,
            isLoading: false,
            data: data.data,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setUsers({
            ...users,
            isLoading: false,
            data: [],
            isError: err.massage,
          });
        }
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2 className="text-center py-5">Users page</h2>
      {users.isLoading ? <Loading /> : ""}
      {users.isError ? <h2 className="text-danger"> {users.isError} </h2> : ""}
      {users.data.length ? (
        <ul className="list-group w-50 mx-auto">
          {" "}
          {users.data.map((user) => (
            <li key={user.id} className="list-group-item">
              {" "}
              <Link to={`/users/${user.id}`}> {user.id}.{user.name}</Link>{" "}
            </li>
          ))}{" "}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
