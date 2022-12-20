import Button from "./Button";
import classes from "./Movies.module.css";

const Movies = (props) => {
  return (
    <li key={props.id} className={classes.movies}>
      <h1>{props.title}</h1>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movies;
