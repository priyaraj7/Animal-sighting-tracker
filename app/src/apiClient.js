export const listSpecies = () => _get("/api/species");

export const addSpecies = (
  name,
  scientificName,
  estimatedCount,
  conservationStatus,
) =>
  _post("/api/species", {
    name,
    scientificName,
    estimatedCount,
    conservationStatus,
  });

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
