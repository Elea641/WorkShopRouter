import { useLoaderData, useParams } from "react-router";

function Details() {
  const characters = useLoaderData();
  const { category, id } = useParams();

  // route : /:category/:id

  const character = characters.find(
    (c) => c.id === parseInt(id) && c.category === category
  );
  console.log(character);
  return (
    <div>
      <div>{character.name}</div>
    </div>
  );
}

export default Details;

/* 
récupérer le tableau grace au loader
récupérer les param de l'url (category et id)
find pour trouver l'objet qui correspond aux critères
afficher le personnage

const params = {
  "category": "minecraft",
  "id": 1
}

*/
