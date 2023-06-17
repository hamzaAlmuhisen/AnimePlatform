import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import { Content } from "antd/es/layout/layout";
import AllAnime from "../features/allAnime/allAnime";
import AnimeDetails from "../features/details/details";
import Login from "../features/auth/login";
import Profile from "../features/profile/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<><AppHeader Auth={true} /><Login/></>}></Route>
        <Route
          element={
            <>
              <AppHeader Auth={false} />
              <Content style={{marginTop:100}}>
                <Outlet />
              </Content>
              <AppFooter />
            </>
          }
        >
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/anime" element={<AllAnime type="Anime" />} />
          <Route path="/movie" element={<AllAnime type="Movies" />} />
          <Route path="/details" element={<AnimeDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
