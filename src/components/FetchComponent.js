import { useContext } from "react";
import { MovieContext } from "../store/MoviesProvider";
import Button from "./Button";
import classes from "./Form.module.css";
const FetchComponent = () => {
  const movieContext = useContext(MovieContext);
  return (
    <section
      className={`${classes.section} ${classes.radius} ${classes.FetchComponent}`}
    >
      <Button onClick={movieContext.fetchMovies}>Fetch Movies</Button>
    </section>
  );
};

export default FetchComponent;
