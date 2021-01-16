require("dotenv").config();
const server = require("./config/ApolloServer");


server.listen(process.env.PORT, () => {
  console.log(`Listen on http://localhost:${process.env.PORT}/graphql`);
});
