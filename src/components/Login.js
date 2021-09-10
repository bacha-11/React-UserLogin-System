import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../feature/userSlice'
import { useHistory } from 'react-router-dom'



function Login(){
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let history = useHistory()


    const dispatch = useDispatch();

    const handlesubmit = (e) =>{
        e.preventDefault();

        dispatch(login(
            {
                name:name,
                email:email,
                password:password,
                loggedIn:true,
            }
        ))

        history.push('/')
    };


    

    return(
        <div className="form-container">
            <h1>Login Form</h1>
            <form onSubmit={(e) => handlesubmit(e)}>
                
                <input type="text" value={name}  placeholder="Enter Username" onChange={(e) => setname(e.target.value)}  required/>

                <input type="email" value={email}  placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} required/>

                <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} required/> 

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default Login;