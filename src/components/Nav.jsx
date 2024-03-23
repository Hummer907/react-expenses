//assets
import { NavLink } from 'react-router-dom';
import logo from '../assets/logomark.svg'
import { Form } from "react-router-dom"
import { TrashIcon } from '@heroicons/react/24/solid'


const Nav = ({userName})=>{
   //userName object
    return(
        <nav>
            <NavLink to='/' aria-label='Go To Home'>
            <img src={logo} height={30}/>
            <span>HomeBudget</span>
            </NavLink>
            {
                userName.name !== '' && (
                    <Form  method='post' action='/logout' onSubmit={
                        (event)=>{
                            console.log("Button delete")
                            if(!confirm("Confirm delete user and all data")){
                                event.preventDefault();
                            }
                        }
                    }>
                      
                        <button type="submit" className='btn btn--warning'>
                            <span>Delete User</span>
                            <TrashIcon width={20}/>
                        </button>
                   
                    </Form>
                )
            }
        
        </nav>
    );
}

export default Nav;