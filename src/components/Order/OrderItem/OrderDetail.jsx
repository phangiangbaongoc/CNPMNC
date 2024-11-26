import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrderDetail.css";
import { getOrderAPI } from "../../../util/api";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrderAPI(orderId);
        setOrder(response.order);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin đơn hàng:", err);
        setError("Không thể tải thông tin đơn hàng.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  // Hiển thị loading hoặc lỗi
  if (loading) return <div>Đang tải thông tin đơn hàng...</div>;
  if (error) return <div>{error}</div>;

  // Kiểm tra nếu `order` không tồn tại
  if (!order || !order.items || order.items.length === 0) {
    return <div>Không có thông tin đơn hàng hoặc đơn hàng trống.</div>;
  }

  return (
    <div className="order-details-container">
      <h2>Thông tin đơn hàng</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Tên món</th>
            <th>Số Lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={item.productId.Food_picture}
                  alt={item.productId.Food_name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{item.productId.Food_name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toLocaleString()} đ</td>
              <td>{(item.price * item.quantity).toLocaleString()} đ</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="order-summary">
        <p>
          <strong>Tổng số lượng:</strong> {order.totalItems}
        </p>
        <p>
          <strong>Tổng tiền:</strong> {order.totalPrice.toLocaleString()} đ
        </p>
      </div>

      <button className="close-btn">Thanh toán momo</button>
    </div>
  );
};

export default OrderDetails;
