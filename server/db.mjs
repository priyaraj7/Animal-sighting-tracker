import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

// export const getTasks = () => db.any("SELECT * FROM tasks");

// export const addTask = (name) =>
//   db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

export const listSpecies = async () => await db.any("SELECT * FROM species");

export const addSpecies = async (
  commonName,
  scientificName,
  estimatedCount,
  conservationStatus,
) =>
  await db.one(
    "INSERT INTO \
      species(common_name,scientific_name, estimated_count,conservation_status)\
      VALUES(${name}, ${scientificName}, ${estimatedCount}, ${conservationStatus}) RETURNING *",
    {
      commonName,
      scientificName,
      estimatedCount,
      conservationStatus,
    },
  );
// db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

// db part
function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
