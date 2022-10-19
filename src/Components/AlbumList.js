import React, { useEffect, useState } from "react";
import "./AlbumList.css";
import { FcApproval } from "react-icons/fc";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
const AlbumList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API = "https://jsonplaceholder.typicode.com/albums";
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
        List Of Albums
      </h2>
      <NavLink to="/album" style={{textDecorationLine:'none'}}>
      <div className="container-fluid  mb-12 p-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { id,userId,title } = curElem;

            return (
            
              <div className="col-12 col-md-4 mt-5" >
                <div className="card p-2 ">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {" "}
                      <h5 className="mb-0 mt-0 textLeft" style={{fontSize:'12px'}}>
                        {id}{" "}
                      </h5>
                    </div>
                    <div className="ml-3 w-100">
                      <h5 className="mb-0 mt-0 textLeft">
                       {userId} <FcApproval />
                      </h5>
                      {/* <span className="text-left">{type }</span> */}
                      <div className="p-2 mt-2  bg-warning bg d-flex justify-content-center rounded  stats">
                        <div className="d-flex flex-row textLeft " style={{fontSize:'12px'}}>
                         {title}
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

export default AlbumList;
