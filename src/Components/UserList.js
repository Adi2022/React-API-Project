import React, { useEffect, useState } from "react";
import "./UserList.css";
import { FcApproval } from "react-icons/fc";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API = "https://jsonplaceholder.typicode.com/users";
  const getApiData = async (url) => {
    try {
      const res = await fetch(url);
      setUsers(await res.json());
      setIsLoading(false);
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    getApiData(API);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-primary">
      <h2
        className="text-center pt-4 "
        style={{ color: "white", textDecorationLine: "underline" }}
      >
        List Of Users
      </h2>
      <NavLink to="albumlist" style={{textDecorationLine:'none'}}>
      <div className="container-fluid  mb-12 p-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { name,username,email,address } = curElem;

            return (
            
              <div className="col-12 col-md-4 mt-5" >
                <div className="card p-2 ">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {" "}
                      <h5 className="mb-0 mt-0 textLeft" style={{fontSize:'12px',textDecorationLine:'none'}}>
                        {name} {" "}
                      </h5>
                    </div>
                    <div className="ml-3 w-100">
                      <h5 className="mb-0 mt-0 textLeft">
                       {username}<FcApproval />
                      </h5>
                      {/* <span className="text-left">{type }</span> */}
                      <div className="p-2 mt-2  bg-warning bg d-flex justify-content-center rounded  stats">
                        <div className="d-flex flex-row textLeft " style={{fontSize:'12px'}}>
                         {email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default UserList;
