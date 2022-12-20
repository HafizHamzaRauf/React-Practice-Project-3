import { useContext } from "react";
import { MovieContext } from "../store/MoviesProvider";
import Button from "./Button";
import classes from "./Form.module.css";

function Form() {
  const movieContext = useContext(MovieContext);

  return (
    <section className={`${classes.section} ${classes.radius}`}>
      <form onSubmit={movieContext.onAddMovie}>
        <label>Title</label>
        <input
          onChange={movieContext.onTitleChange}
          className={classes.radius}
          type="text"
          value={movieContext.title}
        />
        <label>Opening Text</label>
        <textarea
          value={movieContext.openingText}
          onChange={movieContext.onOpeningTextChange}
          className={`${classes.openingText} ${classes.radius}`}
        ></textarea>
        <label>Release Date</label>
        <input
          value={movieContext.releaseDate}
          onChange={movieContext.onReleaseDateChange}
          className={classes.radius}
          type="text"
        />
        <Button type={"submit"} className={classes.center}>
          Add Movie
        </Button>
      </form>
    </section>
  );
}

export default Form;
