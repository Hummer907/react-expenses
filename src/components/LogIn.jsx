import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from '../assets/illustration.jpg'
const LogIn = () => {
    return (
      <div className="intro">
        <div>
          <h1>
            Take Control of <span className="accent">Your Money</span>
          </h1>
          <p>
            Personal budgeting is the secret to financial freedom. Start your journey today.
          </p>
         <Form method="post" >
            <input type="text" name="userName" required placeholder="What is your name?" aria-label="Your name" autoComplete="given-name"/>
            <button className="btn btn--dark" type="submit" onClick={() => console.log("Account created")}><span>Create Account</span> <UserPlusIcon width={30}/></button>
         </Form>
         
        </div>
        <img src={illustration} alt="Person with money" width={600}/>
      </div>
    )
  }

export default LogIn;