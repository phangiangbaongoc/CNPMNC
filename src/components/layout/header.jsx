import React, { useContext, useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  console.log(">>> check auth:", auth);
  const items = [
    {
      label: <Link to={"/"}>Home Page</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    ...(auth.isAuthenticated
      ? [
          {
            label: <Link to={"/user"}>Users</Link>,
            key: "user",
            icon: <MailOutlined />,
          },

          {
            label: <Link to={"/list_staff"}>Nhân viên</Link>,
            key: "staff",
            icon: <MailOutlined />,
          },
          {
            label: "Product",
            key: "SubMenu1",
            icon: <SettingOutlined />,
            children: [
              {
                label: <Link to={"/listproduct"}>Product</Link>,
                key: "product",
                icon: <MailOutlined />,
              },
              {
                label: <Link to={"/list_ware"}>warehouse</Link>,
                key: "warehouse",
                icon: <MailOutlined />,
              },
              {
                label: <Link to={"/order"}>Doanh thu</Link>,
                key: "order",
                icon: <MailOutlined />,
              },
            ],
          },
        ]
      : []),
    {
      label: <Link to={"/cart"}>cart</Link>,
      key: "cart",
      icon: <MailOutlined />,
    },
    {
      label: `Welcome ${auth?.user?.email}`,
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        ...(auth.isAuthenticated
          ? [
              {
                label: (
                  <span
                    onClick={() => {
                      localStorage.clear("access_token");
                      setCurrent("home");
                      setAuth({
                        isAuthenticated: false,
                        user: {
                          email: "",
                          name: "",
                        },
                      });
                      navigate("/");
                    }}
                  >
                    Đăng xuất
                  </span>
                ),
                key: "logout",
              },
            ]
          : [
              {
                label: <Link to={"/login"}>Đăng nhập</Link>,
                key: "login:3",
              },
            ]),
      ],
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      triggerSubMenuAction="hover"
    />
  );
};
export default Header;
