import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import GenreMoviePage from "./pages/GenreMoviePage";
import GenrePage from "./pages/GenrePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Routes>
            <Route path="/genre/:id" element={
              <GenreMoviePage/>
            }/>
            <Route path="/genre" element={
              <GenrePage/>
            }/>
            <Route path="/movie/:id" element={
              <MovieDetailPage/>
            }/>
            <Route path="/" element={
              <MoviePage/>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
