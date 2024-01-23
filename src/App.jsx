import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </>
  );
}

export default App;
