import React from "react";
import ListRevenue from "../../components/revenue/list-revenue";
import { useLocation } from "react-router-dom";

function RevenueStore() {
  const location = useLocation();
  const storeId = location.state?.storeId;
  console.log("storeId at revenue is " + storeId);

  return (
    <div className="bg-[#ffffff] w-full h-screen">
      <div>
        <ListRevenue />
      </div>
    </div>
  );
}

export default RevenueStore;
