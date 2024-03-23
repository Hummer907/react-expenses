import { redirect } from "react-router-dom";
import { deleteUser } from "../helper";
import { toast } from "react-toastify";

export async function logoutAction(){
    // delete user data
    deleteUser("userName");

    toast.success("you've succesfully deleted your account!")
    // redirect
    return redirect('/')
}

