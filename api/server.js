// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// // const { Pool } = require('pg');
// const pool = require('../src/db/db.cjs'); // Conexión a la base de datos PostgreSQL

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware para manejar datos JSON
// app.use(express.json());
// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Obtener todas las mascotas
// app.get('/mascotas', async (req, res) => {
//     console.log("ntra");
//   try {
//     const mascotas = await pool.query('SELECT * FROM mascotas');
//     console.log("query");
//     console.log(mascotas, mascotas.rows);
//     res.json(mascotas.rows);
//     console.log(mascotas.rows);
//   } catch (error) {
//     console.error('Error al obtener mascotas', error);
//     res.status(500).json({ message: 'Error al obtener mascotas' });
//   }
// });

// // Agregar una mascota
// app.post('/mascotas', async (req, res) => {
//   try {
//     const { nombre, tipo } = req.body;
//     const nuevaMascota = await pool.query('INSERT INTO mascotas (nombre, tipo) VALUES ($1, $2) RETURNING *', [nombre, tipo]);
//     res.json(nuevaMascota.rows[0]);
//   } catch (error) {
//     console.error('Error al agregar una mascota', error);
//     res.status(500).json({ message: 'Error al agregar una mascota' });
//   }
// });

// // Actualizar una mascota
// app.put('/mascotas/:id', async (req, res) => {
//   try {
//     const { nombre, tipo } = req.body;
//     const { id } = req.params;
//     const mascotaActualizada = await pool.query('UPDATE mascotas SET nombre = $1, tipo = $2 WHERE id = $3 RETURNING *', [nombre, tipo, id]);
//     res.json(mascotaActualizada.rows[0]);
//   } catch (error) {
//     console.error('Error al actualizar una mascota', error);
//     res.status(500).json({ message: 'Error al actualizar una mascota' });
//   }
// });

// // Eliminar una mascota
// app.delete('/mascotas/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await pool.query('DELETE FROM mascotas WHERE id = $1', [id]);
//     res.json({ message: 'Mascota eliminada correctamente' });
//   } catch (error) {
//     console.error('Error al eliminar una mascota', error);
//     res.status(500).json({ message: 'Error al eliminar una mascota' });
//   }
// });

// // const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });
