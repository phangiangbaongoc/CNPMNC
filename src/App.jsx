import { useEffect } from "react";
import axios from "./util/axios.customize";
import Header from "./components/layout/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer";
function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      // const res = await axios.get(
      //   "${import.meta.env.VITE_BACKEND_URL}/v1/api/"
      // );
      const res = await axios.get("/v1/api/");
      console.log(">>> check res: ", res);
    };
    fetchHelloWorld();
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
