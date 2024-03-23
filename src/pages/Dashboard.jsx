import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../helper';
import LogIn from '../components/LogIn';
import { toast } from 'react-toastify';


export async function dashboardloader(){
    try{
        const userName = await fetchData("userName");
        console.log('Dash board Loader',userName);
        return  userName ;
    }catch{
        console.error("Dash boadr error");
    }
    
    
    
}

export async function dashboardAction({request}){
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    console.log('Dashboard Action',formData);
    try{
        localStorage.setItem('userName', JSON.stringify({
            name: formData.userName,
          }));
        toast.success(`Welcome ${formData.userName}`);
    }catch{
        console.error("Account not created");
        throw Error("Error with Account creation !");
    }

    // redirect to the dashboard
    return redirect('/');
}

function DashBoard() {
    let userName  = useLoaderData();;
    console.log("dash board function ",userName); 
    let name = userName.name;

  return (
    <>
     <h1>{name !=='' ? (<p>{name}</p>) : <LogIn/>}</h1>


    </>
  );
}

export default DashBoard;
