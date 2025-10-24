function status(request, response) {
  response.status(200).json({
    alunos_curso_dev: "são acima da média",
  });
}

export default status;
