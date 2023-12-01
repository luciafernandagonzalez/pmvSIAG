// const { Pool } = require('pg');
// // import { Pool } from 'pg';

// const pool = new Pool({
//     connectionString: 'postgres://oysieqbm:1aA5h-tYipHEsgZBuhIy3U6lO_qhwOuA@cornelius.db.elephantsql.com/oysieqbm',
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// // Intentar conectarse a la base de datos
// pool.connect((err, client, release) => {
//     if (err) {
//       return console.error('Error al conectarse a la base de datos:', err);
//     }
//     console.log('Conexión exitosa a la base de datos');
  
//     // Realizar alguna operación de prueba aquí si lo deseas
  
//     // Liberar el cliente
//     release();
//     // Cerrar el pool
//     // pool.end(() => {
//     //   console.log('Conexión cerrada');
//     // });
//   });

// // module.exports = { 
// //     query: (text, params, callback) => {
// //         return pool.query(text, params, callback);
// //     }
// // };

// module.exports = pool;
