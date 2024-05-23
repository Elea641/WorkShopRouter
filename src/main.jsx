import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { PokemonList } from "./components/PokemonList";
import { PokemonDetails } from "./components/PokemonDetails";
import Details from "./components/Details";

const fetchApi = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const fetchPokemonById = (url, id) => {
  return fetchApi(url)
    .then((pokemons) => {
      return pokemons.find((pokemon) => pokemon.id === parseInt(id));
    })
    .catch((err) => console.error(err));
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PokemonList />,
        loader: () => fetchApi("data.json"),
      },
      {
        path: "/:id",
        element: <PokemonDetails />,
        loader: ({ params }) => {
          return fetchPokemonById("data.json", params.id);
        },
      },
      {
        path: "/:category/:id",
        element: <Details />,
        loader: () => fetchapi("../data2.json"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
