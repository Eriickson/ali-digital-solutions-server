const { db } = require("../../config/db");

module.exports = {
  Mutation: {
    async newUser(_, args) {
      const {
        name,
        secondName,
        paternalLastname,
        maternalLastname,
        birthday,
        email,
        numberPhone,
      } = args.user;

      const newUser = {
        name,
        secondName,
        paternalLastname,
        maternalLastname,
        birthday,
        email,
        numberPhone,
      };

      db.query(`INSERT INTO users_test_erickson_manuel SET ?`, newUser, (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      });
      return "Usuario agregado";
    },
  },
};
