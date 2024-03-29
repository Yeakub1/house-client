import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </>
  );
}

export default App;
