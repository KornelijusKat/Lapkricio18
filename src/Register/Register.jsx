import './Login.scss'
const Register = ()=>{
    return (
        <div className="loginContainer">
            <div className="content">
                <h2>Hello!</h2>
                <p>Sign Up to Get Started</p>
                <form>
                    <input placeholder="Full Name"></input>
                    <input placeholder="Email address"></input>
                    <input placeholder="Password"></input>
                    <button type="submit">Login</button>
                </form>
            </div> 
        </div>
    )
}
export default Register