// import React, { useState, useRef, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const initialOrders = [
//   {
//     id: "CH2202Y1306",
//     name: "Phạm Thanh Phúc",
//     price: 20000,
//     quantity: 2,
//     status: "pending",
//     image:
//       "https://tse2.mm.bing.net/th?id=OIP.tcx5hOxoL3t4Im8EZ6Hv5wHaEK&pid=Api&P=0&h=180",
//   },
//   {
//     id: "CH1234O1111",
//     name: "Nguyễn Văn B",
//     price: 40000,
//     quantity: 5,
//     status: "pending",
//     image:
//       "https://tse2.mm.bing.net/th?id=OIP.tcx5hOxoL3t4Im8EZ6Hv5wHaEK&pid=Api&P=0&h=180",
//   },
//   {
//     id: "CH1234O2222",
//     name: "Nguyễn Thị B",
//     price: 30000,
//     quantity: 1,
//     status: "received",
//     image:
//       "https://tse2.mm.bing.net/th?id=OIP.tcx5hOxoL3t4Im8EZ6Hv5wHaEK&pid=Api&P=0&h=180",
//   },
//   {
//     id: "CH1234O3333",
//     name: "Nguyễn Thị N",
//     price: 15000,
//     quantity: 1,
//     status: "received",
//     image:
//       "https://tse2.mm.bing.net/th?id=OIP.tcx5hOxoL3t4Im8EZ6Hv5wHaEK&pid=Api&P=0&h=180",
//   },
//   {
//     id: "CH1234O4444",
//     name: "Nguyễn Thanh M",
//     price: 15000,
//     quantity: 3,
//     status: "completed",
//     image:
//       "https://tse2.mm.bing.net/th?id=OIP.tcx5hOxoL3t4Im8EZ6Hv5wHaEK&pid=Api&P=0&h=180",
//   },
//   {
//     id: "CH1234O5555",
//     name: "Nguyễn Thanh L",
//     price: 30000,
//     quantity: 2,
//     status: "completed",
//     image:
//       "https://tse2.mm.bing.net/th?id=OIP.tcx5hOxoL3t4Im8EZ6Hv5wHaEK&pid=Api&P=0&h=180",
//   },
// ];

// function ListOrder() {
//   const [orders, setOrders] = useState(initialOrders);
//   const [activeTab, setActiveTab] = useState("pending");
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [confirmationAction, setConfirmationAction] = useState(null);
//   const confirmationRef = useRef(null);

//   const filteredOrders = orders.filter((order) => order.status === activeTab);

//   const handleConfirmCancel = (order) => {
//     setSelectedOrder(order);
//     setConfirmationAction("cancel");
//   };

//   const handleConfirmAccept = (order) => {
//     setSelectedOrder(order);
//     setConfirmationAction("accept");
//   };

//   const handleConfirmComplete = (order) => {
//     setSelectedOrder(order);
//     setConfirmationAction("complete");
//   };

//   const handleCancelOrder = () => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === selectedOrder.id ? { ...order, status: "canceled" } : order
//       )
//     );
//     setSelectedOrder(null);
//     setConfirmationAction(null);
//     toast.success("Hủy đặt đơn hàng thành công!");
//   };

//   const handleAcceptOrder = () => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === selectedOrder.id ? { ...order, status: "received" } : order
//       )
//     );
//     setSelectedOrder(null);
//     setConfirmationAction(null);
//     toast.success("Nhận đơn hàng thành công!");
//   };

//   const handleCompleteOrder = () => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === selectedOrder.id
//           ? { ...order, status: "completed" }
//           : order
//       )
//     );
//     setSelectedOrder(null);
//     setConfirmationAction(null);
//     toast.success("Đơn hàng hoàn thành thành công!");
//   };

//   const handleClickOutside = (event) => {
//     if (
//       confirmationRef.current &&
//       !confirmationRef.current.contains(event.target)
//     ) {
//       setSelectedOrder(null);
//       setConfirmationAction(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="max-w-[1200px] mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-[#ff7e00]">Đơn hàng</h1>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//       />
//       <div className="flex space-x-4 border-b mb-4">
//         <button
//           className={`pb-2 ${
//             activeTab === "pending" ? "border-b-2 border-red-500" : ""
//           }`}
//           onClick={() => setActiveTab("pending")}
//         >
//           Chờ xác nhận
//         </button>
//         <button
//           className={`pb-2 ${
//             activeTab === "received" ? "border-b-2 border-red-500" : ""
//           }`}
//           onClick={() => setActiveTab("received")}
//         >
//           Đã nhận
//         </button>
//         <button
//           className={`pb-2 ${
//             activeTab === "completed" ? "border-b-2 border-red-500" : ""
//           }`}
//           onClick={() => setActiveTab("completed")}
//         >
//           Hoàn thành
//         </button>
//       </div>

//       {filteredOrders.length > 0 ? (
//         filteredOrders.map((order) => (
//           <div
//             key={order.id}
//             className="border rounded-lg p-4 mb-4 shadow-sm flex justify-between items-center space-y-5"
//           >
//             <div className="flex items-center space-x-4">
//               <img
//                 src={order.image}
//                 alt={order.name}
//                 className="w-16 h-16 object-cover rounded-lg"
//               />
//               <div className="space-y-1">
//                 <p className="font-semibold">Mã đơn hàng: {order.id}</p>
//                 <p>Tên người nhận: {order.name}</p>
//                 <p>Số lượng: {order.quantity}</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-end space-y-2">
//               <p className="font-semibold">
//                 Tổng giá: {(order.price * order.quantity).toLocaleString()} VND
//               </p>
//               {activeTab === "pending" && (
//                 <div className="flex space-x-2">
//                   <button
//                     className="px-4 py-2 bg-[#EF4C2B] text-white rounded flex items-center space-x-2 hover:bg-white hover:text-[#EF4C2B] hover:border-[#EF4C2B] hover:border-[3px]"
//                     onClick={() => handleConfirmAccept(order)}
//                   >
//                     <span>Nhận đơn</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 border-white border-[3px] rounded-[5px]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-white text-[#EF4C2B] rounded flex items-center border-[3px] border-[#EF4C2B] space-x-2 hover:bg-[#EF4C2B] hover:text-white"
//                     onClick={() => handleConfirmCancel(order)}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 border-[#EF4C2B] border-[3px] rounded-[5px]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span>Hủy</span>
//                   </button>
//                 </div>
//               )}
//               {activeTab === "received" && (
//                 <button
//                   className="px-4 py-2 bg-[#EF4C2B] text-white rounded flex items-center space-x-2 hover:text-white hover:border-[#EF4C2B] hover:border-[3px]"
//                   onClick={() => handleConfirmComplete(order)}
//                 >
//                   <span>Nhận đơn</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 border-white border-[3px] rounded-[5px]  "
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </button>
//               )}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-center">Không có đơn hàng nào.</p>
//       )}

//       {/* Confirmation Modal */}
//       {selectedOrder && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div
//             ref={confirmationRef}
//             className="bg-white p-5 rounded-lg shadow-lg"
//           >
//             <h2 className="text-xl text-center">
//               {confirmationAction === "cancel"
//                 ? "Xác nhận hủy đơn hàng"
//                 : confirmationAction === "accept"
//                 ? "Xác nhận nhận đơn hàng"
//                 : "Xác nhận hoàn thành đơn hàng"}
//             </h2>
//             <p className="text-center">
//               Bạn có chắc chắn muốn{" "}
//               {confirmationAction === "cancel"
//                 ? "hủy"
//                 : confirmationAction === "accept"
//                 ? "nhận"
//                 : "hoàn thành"}{" "}
//               đơn hàng <span className="font-bold">{selectedOrder.id}</span>?
//             </p>
//             <div className="flex justify-around mt-4">
//               <button
//                 className={`px-4 py-2 ${
//                   confirmationAction === "cancel"
//                     ? "bg-red-500"
//                     : confirmationAction === "accept"
//                     ? "bg-green-500"
//                     : "bg-blue-500"
//                 } text-white rounded hover:bg-${
//                   confirmationAction === "cancel"
//                     ? "red-600"
//                     : confirmationAction === "accept"
//                     ? "green-600"
//                     : "blue-600"
//                 }`}
//                 onClick={
//                   confirmationAction === "cancel"
//                     ? handleCancelOrder
//                     : confirmationAction === "accept"
//                     ? handleAcceptOrder
//                     : handleCompleteOrder
//                 }
//               >
//                 Đồng ý
//               </button>
//               <button
//                 className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
//                 onClick={() => {
//                   setSelectedOrder(null); // Close the modal by clearing the selected order
//                   setConfirmationAction(null); // Reset the confirmation action
//                 }}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ListOrder;
import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialOrders = [
  // Danh sách đơn hàng ban đầu
];

function ListOrder() {
  const [orders, setOrders] = useState(initialOrders);
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [confirmationAction, setConfirmationAction] = useState(null);
  const confirmationRef = useRef(null);

  const filteredOrders = orders.filter((order) => order.status === activeTab);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        confirmationRef.current &&
        !confirmationRef.current.contains(event.target)
      ) {
        setSelectedOrder(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#ff7e00]">Đơn hàng</h1>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {["pending", "received", "completed"].map((status) => (
          <button
            key={status}
            className={`pb-2 ${
              activeTab === status ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => setActiveTab(status)}
          >
            {status === "pending"
              ? "Chờ xác nhận"
              : status === "received"
              ? "Đã nhận"
              : "Hoàn thành"}
          </button>
        ))}
      </div>

      {/* Orders */}
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 mb-4 shadow-sm flex justify-between items-center space-y-5"
          >
            <div className="flex items-center space-x-4">
              <img
                src={order.image}
                alt={order.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold">Mã đơn hàng: {order.id}</p>
                <p>Tên người nhận: {order.name}</p>
                <p>Số lượng: {order.quantity}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <p className="font-semibold">
                Tổng giá: {(order.price * order.quantity).toLocaleString()} VND
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleViewDetails(order)}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Không có đơn hàng nào.</p>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={confirmationRef}
            className="bg-white p-5 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h2>
            <p>Mã đơn hàng: {selectedOrder.id}</p>
            <p>Tên người nhận: {selectedOrder.name}</p>
            <p>Số lượng: {selectedOrder.quantity}</p>
            <p>
              Tổng giá:{" "}
              {(selectedOrder.price * selectedOrder.quantity).toLocaleString()}{" "}
              VND
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={() => setSelectedOrder(null)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListOrder;
