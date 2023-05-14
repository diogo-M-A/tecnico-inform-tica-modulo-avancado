const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
const secret = process.env.SECRET_KEY;

app.get('/', (req, res) => {
      return res.json({msg: "acesse as rotas /token ou /validar"});
});

app.get('/token', (req, res) => {
  const payload = {
    random_number: Math.random()
  };

  jwt.sign(payload, secret, { expiresIn: '1h' }, (err, token) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to generate token' });
    }

    return res.json({ token });
  });
});

app.get('/validar', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(400).json({ error: 'nenhum token fornecido' });
    }
  
    const parts = authHeader.split(' ');
  
    if (parts.length !== 2) {
      return res.status(400).json({ error: 'Token error' });
    }
  
    const [scheme, token] = parts;
  
    if (!/^Bearer$/i.test(scheme)) {
      return res.status(400).json({ error: 'Token malformatted' });
    }
  
    try {
      const decoded = jwt.verify(token, secret);
      return res.json({ payload: decoded });
    } catch (err) {
      return res.status(400).json({ error: 'token inválido' });
    }
  });  

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
