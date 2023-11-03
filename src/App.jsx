import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";

const Messages = () => {
  return <h1>А это страница с Сообщениями</h1>;
};

const Friends = () => {
  return <h1>Страница с Друзьями</h1>;
};

function App() {
  return (
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
  );
}

export default App;
