


function Register(){
    return(
        <div className="form-container">
            <h1>Registration Form</h1>
            <form>
    
                <input type="text" id="name" placeholder="Enter Username" />

                <input type="email" id="email" placeholder="Enter Email" />

                <input type="password" id="password" placeholder="Enter Password" />

                <input type="password" id="password" placeholder="Repeat Password" />  

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default Register;