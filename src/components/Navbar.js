import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import { useDispatch } from "react-redux";
import { logout } from '../feature/userSlice'

function Navbar(){
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const handleLogout = (e) =>{
        e.preventDefault()

        dispatch(logout())
    }

    return(
        <div className='navbar'>
            <h1>Login <span>System</span></h1>
            
            {user? 
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/user'> User </Link></li>
                    <li><button onClick={(e) => handleLogout(e)}> Logout </button></li>
                    
                </ul>
              :  
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/login'> Login </Link></li>
                </ul>
            }
            
        </div>
    )
}


export default Navbar;