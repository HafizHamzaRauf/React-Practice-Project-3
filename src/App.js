import FetchComponent from "./components/FetchComponent";
import Form from "./components/Form";
import MoviesList from "./components/MoviesList";
import { MoviesProvider } from "./store/MoviesProvider";

const App = (props) => {
  return (
    <MoviesProvider>
      <Form></Form>
      <FetchComponent></FetchComponent>
      <MoviesList></MoviesList>
    </MoviesProvider>
  );
};

export default App;
