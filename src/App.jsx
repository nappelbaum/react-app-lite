import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Messages";
import { Friends } from "./components/Friends";



function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Друзья
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<h1>Выбирайте из пунктов меню слева</h1>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
