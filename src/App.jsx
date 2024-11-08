import { useEffect, useContext } from "react";
import axios from "./util/axios.customize";
import Header from "./components/layout/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer";
import StoreContextProvider from "./components/context/Storecontext";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";
function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true);
      // const res = await axios.get(
      //   "${import.meta.env.VITE_BACKEND_URL}/v1/api/"
      // );
      const res = await axios.get("/v1/api/account");
      if (res) {
        if (res && !res.message) {
          setAuth({
            isAuthenticated: true,
            user: {
              email: res.email,
              name: res.name,
            },
          });
        }
      }
      setAppLoading(false);
    };
    fetchAccount();
  }, []);
  return (
    <StoreContextProvider>
      {" "}
      {/* Bao bọc Outlet trong StoreContextProvider */}
      <div>
        {appLoading === true ? (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate (-50%, -50%)",
            }}
          >
            <Spin />
          </div>
        ) : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
      </div>
    </StoreContextProvider>
  );
}

export default App;
