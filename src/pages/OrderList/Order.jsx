// import "./Order.css";
// const OrderPage = () => {
//   return (
//     <div>
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 font-semibold border-b">Mã đơn hàng</th>
//             <th className="py-2 px-4 font-semibold border-b">Ngày tạo</th>
//             <th className="py-2 px-4 font-semibold border-b">Số lượng món</th>
//             <th className="py-2 px-4 font-semibold border-b">Khách đã trả</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {topProducts.map((product, index) => (
//                 <tr key={index} className="text-center">
//                   <td className="py-2 px-4 border-b justify-center flex">
//                     <img className="w-16 h-16" src={product.photo} alt="" />
//                   </td>
//                   <td className="py-2 px-4 border-b">{product.nameStore}</td>
//                   <td className="py-2 px-4 border-b">{product.quantity}</td>
//                   <td className="py-2 px-4 border-b">{product.revenue}</td>
//                   <td className="py-2 px-4 border-b">
//                     <button className="text-blue-600 hover:underline">
//                       ...
//                     </button>
//                   </td>
//                 </tr>
//               ))} */}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default OrderPage;
import React, { useState } from "react";
import "./Order.css";

function RevenueStatistics() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [period, setPeriod] = useState("day");

  // Example data
  const data = [
    {
      date: "30-05-2023",
      totalOrders: 3,
      deliveredOrders: 1,
      canceledOrders: 2,
      totalRevenue: "660,000 ₫",
      revenueDelivered: "35,000 ₫",
      revenueCanceled: "625,000 ₫",
    },
    {
      date: "31-05-2023",
      totalOrders: 4,
      deliveredOrders: 4,
      canceledOrders: 0,
      totalRevenue: "409,184 ₫",
      revenueDelivered: "409,184 ₫",
      revenueCanceled: "0 ₫",
    },
  ];

  const handleDateChange = (e) => {
    if (e.target.name === "startDate") {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div className="revenue-statistics">
      <h2>Thống kê doanh thu</h2>

      <div className="filter-container">
        <label>Từ:</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={handleDateChange}
        />
        <label>Đến:</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={handleDateChange}
        />
        <label>Thống kê theo:</label>
        <select value={period} onChange={handlePeriodChange}>
          <option value="day">Ngày</option>
          <option value="week">Tuần</option>
          <option value="month">Tháng</option>
        </select>
        <button className="filter-button">Thống kê</button>
      </div>

      <table className="statistics-table">
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Ngày lập đơn hàng</th>
            <th>Tổng số món</th>
            <th>Tổng thành tiền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.totalOrders}</td>
              <td>{row.canceledOrders}</td>
              <td>{row.totalRevenue}</td>
              <td>{row.revenueCanceled}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RevenueStatistics;
