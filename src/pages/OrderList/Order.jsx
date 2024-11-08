// // OrderList.js
// import React, { useState, useEffect } from "react";
// // import OrderItem from "./OrderItem";
// import axios from "axios";
// import "../OrderList/OrderList";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/orders")
//       .then((response) => setOrders(response.data))
//       .catch((error) => console.error("Error fetching orders:", error));
//   }, []);

//   const handleAcceptOrder = (orderId) => {
//     axios
//       .put(`http://localhost:5000/api/orders/${orderId}/accept`)
//       .then(() => {
//         setOrders(
//           orders.map((order) =>
//             order.id === orderId ? { ...order, status: "accepted" } : order
//           )
//         );
//       })
//       .catch((error) => console.error("Error accepting order:", error));
//   };

//   const handleCancelOrder = (orderId) => {
//     axios
//       .put(`http://localhost:5000/api/orders/${orderId}/cancel`)
//       .then(() => {
//         setOrders(orders.filter((order) => order.id !== orderId));
//       })
//       .catch((error) => console.error("Error cancelling order:", error));
//   };

//   return (
//     <div className="order-list">
//       <h2>Đơn hàng</h2>
//       <div>
//         {orders.map((order) => (
//           <OrderItem
//             key={order.id}
//             order={order}
//             onAccept={handleAcceptOrder}
//             onCancel={handleCancelOrder}
//           />
//         ))}
//       </div>
//     </div>
//   );
//   return <div> orrder lisst</div>;
// };

// export default OrderList;

// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import axios from "axios";

// const OrderList = () => {
//   const [orderCount, setOrderCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     // Hàm gọi API để lấy dữ liệu doanh thu và số lượng đơn hàng
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/v1/api/orders/stats");
//         const data = {
//           labels: ["January", "February", "March"],
//           datasets: data.datasets || [], // Đảm bảo rằng datasets không undefined
//         };

//         // Giả sử API trả về các dữ liệu này
//         setOrderCount(data.totalOrders);
//         setRevenue(data.totalRevenue);

//         // Cấu hình dữ liệu biểu đồ
//         setChartData({
//           labels: ["Completed Orders", "Pending Orders", "Cancelled Orders"],
//           datasets: [
//             {
//               data: [
//                 data.completedOrders,
//                 data.pendingOrders,
//                 data.cancelledOrders,
//               ],
//               backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
//               hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#EF5350"],
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="revenue-dashboard">
//       <h2>Revenue Dashboard</h2>
//       <div className="stats">
//         <p>
//           <strong>Total Orders:</strong> {orderCount}
//         </p>
//         <p>
//           <strong>Total Revenue:</strong> ${revenue}
//         </p>
//       </div>
//       <div className="chart">
//         <h3>Order Status Distribution</h3>
//         <Pie data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default OrderList;
import React, { useState, useEffect } from "react";
import { Card, Space } from "antd";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import ListOrder from "../../components/OrderItem/Orderlist";

const tabListNoTitle = [
  {
    key: "article",
    label: "Article",
  },
  {
    key: "app",
    label: "App",
  },
  {
    key: "project",
    label: "Project",
  },
];

const contentListNoTitle = {
  article: <p>Article content</p>,
  app: <p>App content</p>,
  project: <p>Project content</p>,
};

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [chartData, setChartData] = useState({});
  const [activeTabKey, setActiveTabKey] = useState("app");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  useEffect(() => {
    // Fetch orders and stats
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        setOrders(response.data);

        // Fetch stats for orders
        const statsResponse = await axios.get("/v1/api/orders/stats");
        const data = statsResponse.data;

        setOrderCount(data.totalOrders);
        setRevenue(data.totalRevenue);

        setChartData({
          labels: ["Completed Orders", "Pending Orders", "Cancelled Orders"],
          datasets: [
            {
              data: [
                data.completedOrders,
                data.pendingOrders,
                data.cancelledOrders,
              ],
              backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
              hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#EF5350"],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Card
        style={{ width: "100%" }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{ size: "middle" }}
        tabBarExtraContent={<a href="#">More</a>}
      >
        {contentListNoTitle[activeTabKey]}
      </Card>

      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card title="Order List" extra={<a href="#">More</a>}>
          <ListOrder orders={orders} />
        </Card>
        <Card title="Revenue Dashboard" extra={<a href="#">More</a>}>
          <div className="stats">
            <p>
              <strong>Total Orders:</strong> {orderCount}
            </p>
            <p>
              <strong>Total Revenue:</strong> ${revenue}
            </p>
          </div>
          <div className="chart">
            <h3>Order Status Distribution</h3>
            <Pie data={chartData} />
          </div>
        </Card>
      </Space>
    </>
  );
};

export default Order;
