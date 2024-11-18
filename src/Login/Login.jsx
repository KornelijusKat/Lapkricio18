import './login.scss';
const Login= () =>{
    return (
        <div className="loginContainer">
            <div className="content">
                <h2>Hello again!</h2>
                <p>Welcome Back</p>
                <form>
                    <input placeholder="Email address"></input>
                    <input placeholder="Password"></input>
                    <button type="submit">Login</button>
                </form>
                <a href="#" className="forgot">Forgot password</a>
            </div>
            
        </div>
    )
}
export default Login