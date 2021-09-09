import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='navbar'>
            <h1>Login <span>System</span></h1>
            
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/user'> User </Link></li>
                    <li><Link to='/login'> Login </Link></li>
                    <li><Link to='/logout'> Logout </Link></li>
                    <li><Link to='/register'> Register </Link></li>
                </ul>
            
        </div>
    )
}


export default Navbar;