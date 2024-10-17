import { useEffect } from "react";
import axios from "./util/axios.customize";
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
  return <>hello world</>;
}

export default App;
