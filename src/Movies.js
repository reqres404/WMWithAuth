import { motion } from "framer-motion";
import { useState,useRef } from "react";

function Movie(props) {
  const [overview, setOverview] = useState("");
  const [reviewText,setReviewText] = useState("Overview")

  const activeRef = useRef();

  const getInfo = () => {
    if(overview.length===0){
    let title = props.movie.title;
    setOverview(title + "  -:- " + props.movie.overview);
    setReviewText("Hide Overview")
    }
    else {
      setOverview('')
      setReviewText("Overview")
      
    }

  };
  let title = props.movie.title
  let trailerUrl = (title+" trailer.com")
  // const trailerUrl =("www."+{title}+".com")
  // console.log(trailerUrl)
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <header>
        <h2>{props.movie.title}</h2>
      </header>
      
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path}
        href={trailerUrl}
        alt=""
      />
      <button ref={activeRef} onClick={getInfo} className="overViewButtons overview">
      {reviewText}
      </button>


      <p className="rating">
        {props.movie.vote_average}&#10024; ({props.movie.vote_count} votes)
      </p>
      <div>
        <p className="overviewText">{overview}</p>
      </div>
    </motion.div>
  );
}
export default Movie;
