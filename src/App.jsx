import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from './pages/Dashboard';
import Error from './pages/Error';
import { dashboardloader } from "./pages/Dashboard";
import Main from './layouts/Main'
import { mainloader } from "./layouts/Main";
//Library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//actions
import { logoutAction } from "./actions/logout";
import { dashboardAction } from "./pages/Dashboard";
//Css
import './index.css';

const router = createBrowserRouter([
  

  {
    path: "/",
    element:<Main/>,
    loader:mainloader,
    errorElement:<Error/>,
    children:[
        {   index:true,
            path: "/",
            element: <DashBoard />,
            errorElement:<Error/>,
            loader: dashboardloader,
            action:dashboardAction,
          },
    ]
  },
  {
    path:'/logout',
    element: <p>Logout</p>,
    errorElement:<Error/>,
    action:logoutAction,
  },
]);



function App() {

    localStorage.setItem('userName', JSON.stringify({
        name: 'Bob',
      }));
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
