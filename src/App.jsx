import Login from './Login/Login'
import GoFinance from './GoFinance/GoFinance'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <GoFinance/>
        <Login/>
      </div>
    </div>
  )
}

export default App
