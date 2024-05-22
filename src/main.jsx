import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { PokemonList } from "./components/PokemonList";
import { PokemonDetails } from "./components/PokemonDetails";

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
        loader: async () => fetchApi("data.json"),
      },
      {
        path: "/:id",
        element: <PokemonDetails />,
        loader: async ({ params }) => {
          if (params.id) {
            return fetchPokemonById(`data.json`, params.id);
          }
        },
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
