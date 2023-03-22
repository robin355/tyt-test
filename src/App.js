import { RouterProvider } from "react-router-dom";
import { routers } from "./Components/Router/Routers";
import './App.css'
function App() {
  return (
    <div className="font-use">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
