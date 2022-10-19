import React, { useEffect, useState } from "react";
import "./Albums.css";
import { NavLink } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import Loading from "./Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Albums = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API = "https://jsonplaceholder.typicode.com/photos";
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
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-primary">
      <h2
        className="text-center pt-4 "
        style={{ color: "white", textDecorationLine: "underline" }}
      >
        Album
      </h2>
      <NavLink to="/album" style={{ textDecorationLine: "none" }}>
        <div className="container-fluid  mb-12 p-5">
          <div className="row text-center">
            {users.map((curElem) => {
              const { title, url, thumbnailUrl } = curElem;

              return (
                <div className="col-12 col-md-4 mt-5" key={title}>
                  <div className="card p-2 ">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        {" "}
                        <LazyLoadImage
                          src={thumbnailUrl}
                          className="rounded imgUser"
                          width="155"
                          alt="image"
                        />
                      </div>
                      <div className="ml-3 w-100">
                        <h6
                          className="mb-0 mt-0 textLeft"
                          style={{ fontSize: "12px" }}
                        >
                          {title} <FcApproval />{" "}
                        </h6>
                        {/* <span className="text-left">{type }</span> */}
                        <div className="p-2 mt-2  d-flex justify-content-between rounded ">
                          <div
                            className="d-flex flex-column"
                            style={{ fontSize: "12px" }}
                          ></div>
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

export default Albums;
