import React from "react";

import SpeciesList from "./SpeciesList";
import * as apiClient from "./apiClient";

//import { listSpecies } from "../../server/db.mjs";

const Species = () => {
  const [species, setSpecies] = React.useState([]);

  const loadSpecies = async () => setSpecies(await apiClient.listSpecies());
  const addSpecies = (species) =>
    apiClient.addSpecies(species).then(loadSpecies);

  React.useEffect(() => {
    console.log("use effect ran");
    loadSpecies();
  }, []);
  return (
    <section>
      <SpeciesList species={species} />
    </section>
  );
};

export default Species;
