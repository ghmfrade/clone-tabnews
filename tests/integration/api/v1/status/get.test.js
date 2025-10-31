test("GET api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  // Testa status da api
  expect(response.status).toBe(200);

  // Testa data no servidor
  parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parsedUpdatedAt);

  // Testa versão do banco de dados
  expect(responseBody.dependencies.database.version_database).toEqual("16.0");

  // Testa maximo de conexões
  expect(responseBody.dependencies.database.max_connections).toBe(100);

  // Testa conexões ativas
  expect(responseBody.dependencies.database.active_connections).toBe(1);
});
