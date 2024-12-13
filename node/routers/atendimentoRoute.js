const Router = require("express").Router;

const router = Router();

// GET POST PUT DELETE

router.put("/atendimentosPut", (req, res) => {
    res.send("Chegou no put!!!");
});

router.post("/atendimentosPost", (req, res) => {
    res.send("Chegou no post!!!");
});

router.get("/atendimento/:id", (req, res) => { // recebe o parâmetro que vem do front
    const { id } = req.params; // aqui o back está pegando o parâmetro que foi passado
    res.send(`Chegou no get!!! id= ${id}`); 
});

router.delete("/DeletarAtendimento/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Chegou no delete!!! Id = ${id}`);
});

module.exports = router;
