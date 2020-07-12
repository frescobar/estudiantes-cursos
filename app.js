const express = require("express");
const app = express();
const db = require("./models");
const path = require("path");
const ejs = require("ejs");

//importar modelos
const Estudiante = require("./models/estudiante");
const Curso = require("./models/curso");
const Registro = require("./models/registro");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

//Ruta home GET
app.get("/", async (req, res) => {
  const estudiantes = await db.Estudiante.findAll();
  res.render("index", { estudiantes });
});

//Ruta home POST
app.post("/agregar-registro", async (req, res) => {
  const asistente = req.body.asistente
  const registro = await db.Registro.create({ asistente: asistente })
  res.json({ registro })
});

// app.get("/asistencia/:id", async (req, res) => {
//   const registro = await db.Registro.findAll();
//   res.json({ registro })
// })

app.get("/cursos", async (req, res) => {
  const cursos = await db.Curso.findAll();
  res.render("cursos", { cursos })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor Escuchando en el puerto ${PORT}`);
});

try {
  db.sequelize.sync({ force: false }).then(() => {
    console.log("BD conectada");
  });
} catch (error) {
  console.log(error.message);
}
