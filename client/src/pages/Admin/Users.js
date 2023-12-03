// Users.js
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/userDetails/get-all-users");
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
        <div className="col-md-2">
          <AdminMenu />
        </div>
          <div className="col-md-10">
            <h1 className="text-center"><b>All Users</b></h1>
            <ul>
              {users.map((user) => (
                <li key={user._id}>{user.username}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
