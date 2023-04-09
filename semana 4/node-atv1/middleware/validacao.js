const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        nome: { type: "string" },
        descricao: { type: "string" },
        preco: { type: "number" }
    },
    required: ["nome", "preco"]
};

const validarDados = ajv.compile(schema);

function validacao(req, res, next) {
    const dados = req.body;
    const valido = validarDados(dados);

    if (!valido) {
        return res.status(400).json(validarDados.errors);
    }
    next();
}

module.exports = validacao;