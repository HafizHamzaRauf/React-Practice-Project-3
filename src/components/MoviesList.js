import { useContext } from "react";
import { MovieContext } from "../store/MoviesProvider";
import classes from "./Form.module.css";
import Movies from "./Movies";
const MoviesList = (props) => {
  const data = useContext(MovieContext);

  const content = data.movies.map((element) => {
    return (
      <Movies
        id={element.id}
        title={element.title}
        openingText={element.openingText}
      ></Movies>
    );
  });
  let sectionContent = data.isLoading ? <p>Loading...</p> : content;
  if (!data.isLoading && data.movies.length === 0) {
    sectionContent = <p>No Movies Found</p>;
  }
  return (
    <section className={`${classes.section} ${classes.radius}`}>
      {sectionContent}
    </section>
  );
};

export default MoviesList;
