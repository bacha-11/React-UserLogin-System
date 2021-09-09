


function Login(){
    return(
        <div className="form-container">
            <h1>Login Form</h1>
            <form>
                {/* <label>User name:</label> */}
                <input type="text" id="name" placeholder="Enter Username" />

                {/* <label for="lname">Password:</label> */}
                <input type="password" id="lname" placeholder="Enter Password" /> 

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default Login;