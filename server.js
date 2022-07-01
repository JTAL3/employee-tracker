// const express = require("express");
// const db = require('./db/connection');

// const apiRoutes = require('./routes/apiRoutes');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// // Use apiRoutes
// app.use('/api', apiRoutes);



// // Start server after DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   });
  



const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");
const apiRoutes = require('./routes/index');
const {Start} = require('./lib/Start');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Initiate the content management system
new Start().manage();

db.connect((err) => {
  if (err) throw err;
  app.listen(PORT, () => {});
});