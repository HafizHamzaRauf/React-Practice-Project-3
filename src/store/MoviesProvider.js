import React, { useEffect, useState } from "react";

export const MovieContext = React.createContext({
  movies: [],
  isLoading: false,
  onAddMovie: () => {
    console.log("here");
  },
  onTitleChange: (e) => {},
  onOpeningTextChange: (e) => {},
  onReleaseDateChange: (e) => {},
  title: "",
  openingText: "",
  releaseDate: "",
  fetchMovies: (e) => {},
});

export function MoviesProvider(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const fetchData = async function (e) {
    if (e) {
      e.preventDefault();
      console.log("here");
    }
    setIsLoading(true);
    const response = await fetch(
      "https://react-complete-guide-9e243-default-rtdb.firebaseio.com/movies.json"
    );
    const data = await response.json();
    const arr = [];
    for (let key in data) {
      const obj = {
        id: key,
        openingText: data[key].openingText,
        title: data[key].title,
      };
      arr.push(obj);
    }
    setMovies(arr);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onAddMovie = async (e) => {
    e.preventDefault();
    const newMovie = {
      openingText: openingText,
      releaseDate: releaseDate,
      title: title,
    };

    await fetch(
      "https://react-complete-guide-9e243-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        "Content-Type": "application/json",
      }
    );
    fetchData();
    setOpeningText("");
    setReleaseDate("");
    setTitle("");
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onOpeningTextChange = (e) => {
    setOpeningText(e.target.value);
  };

  const onReleaseDateChange = (e) => {
    setReleaseDate(e.target.value);
  };
  return (
    <MovieContext.Provider
      value={{
        movies: movies,
        isLoading: isLoading,
        onAddMovie: onAddMovie,
        onTitleChange: onTitleChange,
        title: title,
        openingText: openingText,
        releaseDate: releaseDate,
        onOpeningTextChange: onOpeningTextChange,
        onReleaseDateChange: onReleaseDateChange,
        fetchMovies: fetchData,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
