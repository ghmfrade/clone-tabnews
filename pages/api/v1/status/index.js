import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const vDatabase = await database.query("SHOW server_version;");
  const versionDatabase = vDatabase.rows[0].server_version;

  const maxConn = await database.query("SHOW max_connections;");
  const maxConnections = parseInt(maxConn.rows[0].max_connections);

  const activeConn = await database.query({
    text: `SELECT COUNT(*)::int AS number_of_active_connections
           FROM pg_stat_activity
           WHERE datname = $1`,
    values: [process.env.POSTGRES_DB],
  });
  const activeConnections = activeConn.rows[0].number_of_active_connections;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version_database: versionDatabase,
        max_connections: maxConnections,
        active_connections: activeConnections,
      },
    },
  });
}

export default status;
