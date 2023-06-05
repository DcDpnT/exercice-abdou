import React, { useState } from "react";
import ItemsCard from "./components/ItemsCard";
import "./App.css";

const cardList = [
  {
    imgSrc: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-saturn-v-ascending-aldo-spadoni.jpg",
    title: "Saturn V",
    description: "Utilisé entre 1967 et 1973, il a placé en orbite terrestre, sans aucun échec, les vaisseaux qui ont déposé les astronautes américains sur le sol lunaire. Cette énorme fusée d'un peu plus de 3 000 tonnes, détenant toujours, en 2022, les records de masse et de capacité d'emport, est capable de placer jusqu'à 140 tonnes en orbite basse terrestre pour les dernières missions Apollo.",
     },
    {

    imgSrc: "https://www.programme-tv.net/imgre/fit/~2~program~7cfdd4ebcdf11f4e.jpg/1260x710/quality/80/navette-spatiale-americaine-succes-et-tragedies.jpg",
    title: "Spaceships",
    description: "À l'origine le concept est associé à l'abaissement des coûts de mise en orbite de satellites artificiels (commerciaux ou militaires), d'éléments de station spatiale et à la possibilité d'effectuer des interventions de maintenance en orbite basse. En pratique la navette spatiale américaine, la seule à avoir eu une vie opérationnelle significative, a joué un rôle important essentiellement pour placer en orbite les principaux composants de la station spatiale internationale.",
    },
    {
    imgSrc: "https://fyooyzbm.filerobot.com/v7/eec69e66-5466-5852-9ca0-c1bbfa16205a?vh=2fc6fa&ci_seal=59c85b135d&w=1280&h=746&gravity=auto&func=crop",
    title: "Soyouz",
    description: "Le vaisseau Soyouz est, depuis 1967, le seul véhicule spatial mis en œuvre par l'astronautique russe pour placer en orbite des cosmonautes. Il permet de desservir l'orbite terrestre basse et assure la relève des équipages des stations spatiales : Saliout dans les années 1970, Mir dans les années 1990 et enfin la Station spatiale internationale depuis 1998. Après l'arrêt de la navette spatiale américaine en juillet 2011, Soyouz était devenu le seul vaisseau capable d'assurer la relève de l'équipage permanent de la station spatiale internationale jusqu'au lancement réussi en mai 2020 par la société privée SpaceX de la capsule Crew Dragon par un lanceur Falcon 9",
    },
    {
    imgSrc: "https://www.nasa.gov/sites/default/files/thumbnails/image/sls_-_resized.jpg",
    title: "SLS Artemis Mission",
    description: "Le Space Launch System (litt. « système de lancement spatial »), abrégé SLS, est un lanceur spatial super-lourd américain développé par la NASA depuis 2011 et dont le premier vol a lieu le 16 novembre 2022. Le SLS joue un rôle central dans le programme Artemis dont l'objectif est, 50 ans après le programme Apollo, d'envoyer de nouveau des équipages à la surface de la Lune, puis de préparer les futures missions habitées vers Mars.",
    },
    {
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/SpaceX_Crew_Dragon_%28More_cropped%29.jpg/1920px-SpaceX_Crew_Dragon_%28More_cropped%29.jpg",
    title: "Crew Dragon",
    description: "Le Crew Dragon est un véhicule spatial développé par la société SpaceX pour le compte de l'agence spatiale américaine, la NASA, qui assure depuis 2020 la relève des équipages de la Station spatiale internationale. Le vaisseau est capable de transporter un équipage de quatre astronautes en orbite basse. ",
    },
    {
    imgSrc: "https://www.sciencesetavenir.fr/assets/img/2018/01/30/cover-r4x3w1200-5a70958c2ed05-spacex-falcon-heavy-information-roundup-01-1200x800.jpg",
    title: "Falcon Heavy",
    description: "Falcon Heavy est un lanceur spatial super lourd développé par la société SpaceX. Il a la capacité de placer une charge utile de 63,8 tonnes en orbite basse ou de 26,7 tonnes en orbite de transfert géostationnaire et réutilise les deux étages de la fusée Falcon 9 v1.1 auxquels sont accolés deux propulseurs d'appoint constitués par les premiers étages de cette même fusée.",
    },
    {
    imgSrc: "https://www.meilleure-innovation.com/wp-content/uploads/2015/12/SpaceW-Falcon9-fusee-1.jpg",
    title: "Falcon 9",
    description: "Le Falcon 9 est un lanceur spatial moyen/lourd partiellement réutilisable développé par la société américaine SpaceX dont la dernière version peut placer une charge utile de 22,8 tonnes en orbite basse ou de 8,3 tonnes en orbite de transfert géostationnaire. Le premier tir a eu lieu le 4 juin 2010. L'objectif de SpaceX est de fournir un lanceur permettant d'abaisser fortement le prix des mises en orbite grâce à des coûts de fabrication modérés, et à la récupération et la réutilisation des étages.",
    },
    {
    imgSrc: "https://www.presse-citron.net/app/uploads/2021/09/spacex-starship.jpg",
    title: "Starship",
    description: "Le Starship (propulsé par le premier étage « Super Heavy »), anciennement appelé Big Falcon Rocket ou BFR, est un lanceur spatial super-lourd en cours de développement par SpaceX, visant une capacité à placer une charge utile de plus de 100 tonnes (150 tonnes ultérieurement selon Elon Musk) en orbite basse1. Ce nouveau lanceur aura la particularité d'être entièrement réutilisable et pourrait jouer un rôle central dans les ambitions de la compagnie pour la colonisation de Mars. Il vise également à lancer des satellites vers l'orbite basse ou géostationnaire, et pourrait à terme remplacer les fusées Falcon 9 et Falcon Heavy pour devenir le lanceur principal de SpaceX",
    },
];

const App = () => {
  const [firstname, setFirstname] = useState("");

  const handleInputChange = (event) => {
    setFirstname(event.target.value);
  };

  return (
    <div>
      <h1>Look at Up, {firstname}</h1>
      <input type="text" value={firstname} onChange={handleInputChange} />
      <ItemsCard cardList={cardList} />
    </div>
  );
};

export default App;









