import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movies";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import Bubble from "./components/GIFs/Bubble";
import ManWatchingMovie from "./components/GIFs/Animation2";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5860d92b36bc0ff31a82db46e6c2ef06&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (

      <div className="App">
      <br/>
        <h1>WeekendMovs</h1>
        <br/>
        <Navbar/>

        <div className="center-lottie">
          <Bubble />
        </div>
        <p>A place to find Popular Movies for your Amazing Weekend.</p>
        <hr className="roundedDiv"></hr>
        <br />
        <div className="center-lottie">
          <Filter
            popular={popular}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        </div>

        <br />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        </motion.div>
        <div className="center-lottie">
          <ManWatchingMovie />
        </div>
        <footer>
          <p>
            <p className="footerText">Devloped by :: Aditya Patil</p>
            <a
              className="footer-link-text"
              href="https://www.linkedin.com/in/adittyapatil/"
              target="_blank"
            >
              Get In Touch
            </a>
          </p>
        </footer>
      </div>

  );
}

export default App;
