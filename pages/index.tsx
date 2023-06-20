import Head from "next/head";
import Seo from "../component/Seo";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const API_KEY = "7e3db6a6ed2925c60e07724d7a2042bb";

function getMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  ).then((response) => response.json());
}

export default function Home() {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //         {
  //           method: "GET",
  //           // headers: {
  //           //   Authorization: ` Bearer ${API_KEY}`,
  //           //   accept: "application/json",
  //           // },
  //         }
  //       )
  //     ).json();
  //     setMovies(results);
  //   })();
  // }, []);
  const { data, isLoading } = useQuery(["movies", "popular"], getMovies);

  return (
    <div>
      <Seo title={"Home"} />
      {/* <h1>hello</h1> */}
      {isLoading && <h4>Loading...</h4>}
      {data?.results.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
