const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Ajoutez cette ligne pour autoriser toutes les origines, ou spécifiez une origine
app.use(cors());

app.use(bodyParser.json());

app.post("/api/products", (req, res) => {
  const productData = req.body;
  console.log("Données reçues du frontend :", productData);
  res.status(200).json({ message: "Produit enregistré avec succès !" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
