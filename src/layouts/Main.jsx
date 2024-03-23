import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../helper';
import Nav from '../components/Nav'
//assets
import wave from '../assets/wave.svg'


//Loader
export async function mainloader(){
    const userName = await fetchData("userName");
    console.log("Main Loader :",userName);
    return { userName };
}



function Main() {
    const { userName } = useLoaderData(); // Changed from user to userName
   console.log("Main function :",userName);
  return (
    <div className='layout'>
    
        <Nav userName={userName}/>
        <main>
            <Outlet/>
        </main>
        <img src={wave}/>
    </div>
  );
}

export default Main;
