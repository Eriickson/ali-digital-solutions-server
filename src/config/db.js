const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_NAME,
});

const sql = `
  CREATE TABLE IF NOT EXISTS users_test_erickson_manuel (
    id int PRIMARY KEY auto_increment NOT NULL,
    name varchar(25) NOT NULL,
    secondName varchar(25) NOT NULL,
    paternalLastname varchar(25) NOT NULL,
    maternalLastname varchar(25) NOT NULL,
    birthday date NOT NULL,
    email varchar(25) NOT NULL,
    numberPhone varchar(25) NOT NULL
  );
`;

db.connect((err) => {
  if (err) throw err;

  db.query(sql, function (err) {
    if (err) throw err;
    console.log("Tables created");
  });
  console.log("Conexión establecida con la base de datos");
});

module.exports = { db };