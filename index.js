const app = require("./app");

app.listen(7001, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 7001");
  }
});
