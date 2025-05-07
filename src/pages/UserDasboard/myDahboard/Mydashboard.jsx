import React from "react";
import "./Mydashboard.css";
import { useSelector } from "react-redux";
import { useGetUserStocksQuery } from "../../../redux/api/stockApi";

const Mydashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const { data: stocks, isLoading, isError } = useGetUserStocksQuery(user?.id);

  const totalUnits = stocks?.reduce((acc, stock) => acc + stock.units, 0) || 0;

  if (!user) {
    return <p>Please log in to view your dashboard.</p>;
  }
  return (
    <div className="my-dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-top">
        <div className="dashboard-top-content">
          <div>Name:</div> <div className="page-content"><p>{user.firstName} {user.lastName}</p></div>
        </div>
        <div className="dashboard-top-content">
          <div>Country:</div> <div className="page-content">{user.country}</div>
        </div>
        <div className="dashboard-top-content">
          <div>Phone No:</div> <div className="page-content">{user.phone}</div>
        </div>
        <div className="dashboard-top-content">
          <div>Stock Units:</div>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error loading units</p>
          ) : (
            <div className="page-content">{totalUnits.toFixed(2)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mydashboard;
