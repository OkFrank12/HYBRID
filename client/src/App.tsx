import { RouterProvider } from "react-router-dom";
import { MainRoutes } from "./Router/MainRoutes";


const App = () => {
  return (
    <div>
      <RouterProvider router={MainRoutes} />
    </div>
  );
};

export default App;
