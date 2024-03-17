// pages/Dashboard.jsx
import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../helper';

export function dashboardLoader() {
    const userName =fetchData("userName");
    return { userName }
  }
  
function Dashboard() {
    const userName= useLoaderData();
    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
    }
export default Dashboard