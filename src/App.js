import { RouterProvider } from "react-router-dom";
import { routers } from "./Components/Router/Routers";

function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
