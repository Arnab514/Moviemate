import "./App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Trending from "../src/pages/Trending/Trending";
import Movies from "../src/pages/Movies/Movies";
import TvShows from "../src/pages/TvShows/TvShows";
import Search from "../src/pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvshows" element={<TvShows />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <MainNav />
      </BrowserRouter>
    </>
  );
}

export default App;
