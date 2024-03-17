
import dashboardLoader from './pages/Dashboard';
import Dashboard from './pages/Dashboard';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      loader: dashboardLoader,
     
    },
  ]);
  
  function App() {
    return <div className="App">
      <RouterProvider router={router} />
    </div>;
  }
  
  export default App;