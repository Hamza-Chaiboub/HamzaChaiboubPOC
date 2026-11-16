const app = require("./app");

// use the host port or 3000 locally
const PORT = process.env.PORT || 3000;

// start listening for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});