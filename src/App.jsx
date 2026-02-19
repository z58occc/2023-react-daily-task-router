import "./App.css";
import { HashRouter, NavLink } from "react-router-dom";
import { Routes, Route,useNavigate } from "react-router-dom";


const Todo = () => {
  return (
    <p>
      這是todo頁面
      <br/>
      <Logout />
    </p>
  );
};
const Logout = () => {
  const navigate = useNavigate();
  function handleLogout(){
    navigate("/login")
  }
  return (
    <>
      <button type="button"
      onClick={handleLogout}
      >登出</button>
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
        {/* {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
